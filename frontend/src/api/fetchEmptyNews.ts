import type { GetNewsResponseType } from "@/types";

export async function fetchEmptyNews(): Promise<GetNewsResponseType> {
  const response = await fetch(
    `http://1e14c3489fcb.vps.myjino.ru:5000/api/v1/news/feed/company/empty`,
  );

  return response.json();
}
