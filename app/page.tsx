
import MainPart from "@/components/main-part";
import Footer from "@/components/footer";


export default function Home() {
    return (

    <main className="mx-auto  w-full max-w-[320px] px-4 pb-6 pt-4 sm:max-w-[640px] xl:max-w-[1200px] xl:px-0 ">
        <MainPart />
        <div className="px-8 w-full">
            <Footer />
        </div>
    </main>
  )
}


