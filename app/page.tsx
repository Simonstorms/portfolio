
import MainPart from "@/components/main-part";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-10 flex-1  ">
        <MainPart />
        <div className=" px-8  w-full">
            <Footer />
        </div>
    </main>
  )
}


