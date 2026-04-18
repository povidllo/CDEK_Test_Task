import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

interface PageButtonsComponentProps {
  totalPages: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const PageButtonsComponent = ({
  setPageNumber,
  totalPages,
}: PageButtonsComponentProps) => {
  return (
    <>
      <button
        onClick={() => {
          setPageNumber((prev) => (prev === 1 ? prev : prev - 1));
        }}
        className="cursor-pointer hover:bg-gray-200 rounded"
      >
        <IconArrowNarrowLeft />
      </button>
      <button
        onClick={() =>
          setPageNumber((prev) => (prev === totalPages ? prev : prev + 1))
        }
        className="cursor-pointer hover:bg-gray-200 rounded"
      >
        <IconArrowNarrowRight />
      </button>
    </>
  );
};
