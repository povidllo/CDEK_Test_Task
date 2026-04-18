import { fetchEmptyNews } from "@/api";
import type { News } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useEmptyNews = () => {
  return useQuery<{
    news: News[];
    totalPages: number;
    minDatePublication: string | null;
  }>({
    queryKey: ["news", "empty"],
    queryFn: async () => {
      const data = await fetchEmptyNews();
      return {
        news: data?.news ?? [],
        totalPages: data?.totalPages ?? 1,
        minDatePublication: data?.minDatePublication ?? null,
      };
    },
    staleTime: 1000 * 60,
  });
};
