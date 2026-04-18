import type { News } from "@/types";
import { parseDate } from "@/utils/parseDate";
import {
  IconEye,
  IconPointFilled,
  IconStarFilled,
  IconThumbUp,
} from "@tabler/icons-react";
interface OneNewsBlockProps {
  news: News;
  showImage?: boolean;
  imageIdx?: number;
  imageType?: "hd" | "l" | "m" | "s";
  isTop?: boolean;
}

export const OneBusinessNewsBlock = ({
  news,
  showImage,
  imageType = "m",
  imageIdx = 0,
  isTop = false,
}: OneNewsBlockProps) => {
  const date = parseDate(news.publishedAt);

  const image = news.cover?.images?.[imageIdx]?.[imageType] || "";

  return (
    <div className="w-full h-fit flex flex-col gap-3.5 font-family-[Mode]">
      <div
        className={`w-full h-31.75 shrink-0 overflow-hidden rounded-xl ${showImage ? "block" : "hidden"}`}
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
      <div className="flex flex-col justify-between gap-[3.5px] w-full">
        <div className="flex flex-col gap-[3.5px]">
          {isTop && (
            <div className="text-[10.5px] h-5.25 gap-[3.5px] rounded-xl px-1.75 py-1 flex items-center justify-center w-fit bg-[#FDDEAA] text-[#4F3709]">
              <IconStarFilled height={12.25} width={12.25} />
              Топ Новость
            </div>
          )}
          <div className="font-normal text-[15.75px]">{news.title}</div>
        </div>
        <div className="flex flex-wrap items-center gap-[3.5px] font-normal text-[12.3px] text-[#85888E]">
          <div className="flex gap-2">
            {news.rubrics.map((rubric) => (
              <div key={rubric.id}>#{rubric.name}</div>
            ))}
          </div>
          <IconPointFilled height={15} width={5} />
          <div className=" text-[#85888E]">{date}</div>
          <IconPointFilled height={15} width={5} />

          <div className="flex">
            <IconThumbUp color="#85888E" height={14} width={14} />
            {news.likeCount}
          </div>
          <IconPointFilled height={15} width={5} className="align-middle" />
          <div className="flex">
            <IconEye color="#85888E" height={14} width={14} />
            {news.viewCount}
          </div>
        </div>
      </div>
    </div>
  );
};
