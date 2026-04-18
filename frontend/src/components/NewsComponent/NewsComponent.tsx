import { useGetNews } from "@/hooks/useGetNews";
import { OneBusinessNewsBlock } from "../OneBusinessNewsBlock";
import { useState } from "react";
import { OneCompanyNewsBlock } from "../OneCompanyNewsBlock";
import { capitalize } from "@/utils";
import { useEmptyNews } from "@/hooks";
import { NewsListComponent } from "../NewsListComponent";

interface NewsComponentProps {
  variant?: "business" | "company";
  perPage?: number;
  empty?: boolean;
}

export const NewsComponent = ({
  variant = "company",
  perPage = 3,
  empty = false,
}: NewsComponentProps) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { data, isLoading, isError } = empty
    ? useEmptyNews()
    : useGetNews(pageNumber, perPage);

  const { news: allCurrentNews, totalPages, minDatePublication } = { ...data };

  const date = minDatePublication
    ? capitalize(
        new Date(minDatePublication)
          .toLocaleDateString("ru-RU", {
            month: "long",
            year: "numeric",
          })
          .replace(" г.", ""),
      )
    : "";

  switch (variant) {
    case "company": {
      return (
        <div className="flex flex-col gap-4 w-full sm:max-w-149.5 p-3.5 sm:p-5.25">
          <div className="flex flex-col gap-1.75">
            <h2 className="text-[21px] font-semibold">Новости компании</h2>
            <div className="text-[12.3px] text-[#85888E]">
              {isLoading ? "Загрузка" : isError ? "Ошибка Загрузки" : date}
            </div>
          </div>
          <hr className="text-[#E2E2E4]" />
          <NewsListComponent
            allCurrentNews={allCurrentNews || []}
            totalPages={totalPages ?? 1}
            perPage={perPage}
            setPageNumber={setPageNumber}
            Component={OneCompanyNewsBlock}
            imageType="l"
            dividerClassName="sm:hidden block text-[#E2E2E4] mt-[14px]"
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      );
    }
    case "business": {
      return (
        <div className="flex flex-col gap-4 p-5.25 max-w-156.25">
          <div className="flex flex-col gap-1.75">
            <h2 className="text-[21px] font-semibold">Бизнес</h2>
            <div className="text-[12.3px] text-[#85888E]">
              {isLoading ? "Загрузка" : isError ? "Ошибка Загрузки" : date}{" "}
            </div>
          </div>
          <hr className="text-[#E2E2E4]" />
          <NewsListComponent
            allCurrentNews={allCurrentNews || []}
            totalPages={totalPages ?? 1}
            perPage={perPage}
            setPageNumber={setPageNumber}
            Component={OneBusinessNewsBlock}
            imageType="hd"
            withTop={true}
            dividerClassName="block text-[#E2E2E4] mt-[14px]"
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      );
    }
  }
};
