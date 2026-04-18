import type { News } from "@/types";
import { PageButtonsComponent } from "../PageButtonsComponent";
import { EmptyNewsComponent } from "../EmptyNewsComponent/EmptyNewsComponent";
import { LoadingSkeletonComponent } from "../LoadingSkeletonComponent/LoadingSkeletonComponent";

interface NewsListComponentProps {
  allCurrentNews: News[];
  totalPages: number;
  perPage?: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  isLoading?: boolean;
  isError?: boolean;

  Component: React.ComponentType<any>;

  imageType: "hd" | "l" | "m" | "s";
  dividerClassName?: string;
  withTop?: boolean;
}

export const NewsListComponent = ({
  allCurrentNews,
  totalPages,
  perPage = 3,
  setPageNumber,
  Component,
  imageType,
  dividerClassName = "text-[#E2E2E4]",
  withTop = false,
  isLoading,
  isError,
}: NewsListComponentProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-3.5">
        {Array.from({ length: perPage }).map((_, idx) => (
          <LoadingSkeletonComponent key={idx} />
        ))}
      </div>
    );
  }

  return isError || allCurrentNews?.length !== 0 ? (
    <>
      <div className="flex flex-col gap-3.5">
        {allCurrentNews &&
          allCurrentNews.map((news, idx) => (
            <div key={news.id}>
              <Component
                news={news}
                showImage={idx === 0 ? true : false}
                imageIdx={0}
                imageType={imageType}
                isTop={withTop ? idx === 0 : false}
              />

              {idx !== allCurrentNews.length - 1 && (
                <hr className={dividerClassName} />
              )}
            </div>
          ))}
      </div>

      <div className="flex justify-end gap-1.75">
        <PageButtonsComponent
          totalPages={totalPages ?? 1}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  ) : (
    <EmptyNewsComponent />
  );
};
