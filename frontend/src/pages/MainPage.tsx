import { NewsComponent } from "@/components/NewsComponent";

export const MainPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col gap-4 items-center">
      <NewsComponent variant="company" perPage={5} />
      <hr className="border-t border-black w-full" />{" "}
      <NewsComponent variant="business" perPage={3} />
      <hr className="border-t border-black w-full" />
      <NewsComponent variant="company" empty={true} />
    </main>
  );
};
