import type { News } from "@/types";
import { parseDate } from "@/utils/parseDate";
import { IconEye, IconThumbUp } from "@tabler/icons-react";
interface OneNewsBlockProps {
  news: News;
  showImage?: boolean;
  imageIdx?: number;
  imageType?: "hd" | "l" | "m" | "s";
}

export const OneCompanyNewsBlock = ({
  news,
  showImage,
  imageType = "m",
  imageIdx = 0,
}: OneNewsBlockProps) => {
  const date = parseDate(news.publishedAt);

  const image = news.cover?.images?.[imageIdx]?.[imageType] || "";


  return (
    <div className="w-full sm:w-136 h-fit flex sm:flex-row flex-col gap-3.5  font-family-[Mode]">
      <div
        className={`w-full h-31.75 sm:w-46 sm:h-33.5 shrink-0 overflow-hidden rounded-xl ${showImage ? "block" : "hidden sm:block"}`}
      >
        <img
          src={`http://1e14c3489fcb.vps.myjino.ru:5000/${image}`}
          alt={news.title || ""}
          className="w-full h-full object-cover block"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="flex flex-col justify-between gap-3.5 w-full">
        <div className="flex flex-col">
          <div className="font-normal text-[#85888E]">{date}</div>
          <div className="font-normal text-[15.75px]">{news.title}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {news.rubrics.map((rubric, rubricIndex) => (
              <div
                key={rubric.id}
                className={`px-1.75 py-1 font-normal text-[10.5px] rounded flex items-center justify-center ${rubricIndex === 0 ? "bg-[#E2E2E4]" : "bg-[#AAD7FB] text-[#0E2A45]"}`}
              >
                {rubric.name}
              </div>
            ))}
          </div>
          <div className="flex text-[#85888E] gap-1.75">
            <div className="flex">
              <IconThumbUp color="#85888E" />
              {news.likeCount}
            </div>
            <div className="flex">
              <IconEye color="#85888E" />
              {news.viewCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
