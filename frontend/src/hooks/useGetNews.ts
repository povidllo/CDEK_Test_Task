import { fetchNews } from "@/api/fetchNews";
import type { News } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetNews = (page: number, perPage: number) => {
  return useQuery<{
    news: News[];
    totalPages: number;
    minDatePublication: string;
  }>({
    queryKey: ["news", page, perPage],
    queryFn: async () => {
      const data = await fetchNews(perPage, page);
      console.log(data);
      return {
        news: data?.news ?? [],
        totalPages: data?.totalPages ?? 1,
        minDatePublication: data?.minDatePublication ?? null,
      };
    },
    staleTime: 1000 * 60,
  });
};
