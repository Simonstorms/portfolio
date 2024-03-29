
import MainPart from "@/components/main-part";
import Footer from "@/components/footer";
import Image from "next/image";


export default function Home() {
    return (

    <main className="mx-auto  w-full max-w-[301px] px-2 pb-6 pt-10 sm:max-w-[606px] xl:max-w-[1200px] xl:px-0 ">
        <MainPart />
        <div className=" w-full">
            <Footer />
        </div>
    </main>

  )
}


