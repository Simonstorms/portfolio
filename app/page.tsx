import MainPart from "@/components/main-part";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="mx-auto  w-full max-w-[300px] px-2 pb-6 pt-10 sm:max-w-[600px] xl:max-w-[1200px] xl:px-0 ">
      <MainPart />
      <div className=" w-full">
        <Footer />
      </div>
    </main>
  );
}
