import type { GetNewsResponseType } from "@/types";

export async function fetchNews(
  perPage: number,
  page: number,
): Promise<GetNewsResponseType> {
  const response = await fetch(
    `http://1e14c3489fcb.vps.myjino.ru:5000/api/v1/news/feed/company/short?perPage=${perPage}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
}
