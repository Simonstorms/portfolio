import Footer from "@/components/footer";
import Link from "next/link";
import {IoCloseOutline} from "react-icons/io5";

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto p-10 ">
            <div className="px-8 w-full">
                <Link className="flex items-center justify-center" href="/">
                    <div className="border  p-3  border-black rounded-full "><IoCloseOutline size={20}/></div>
                </Link>
                <div className="mt-10 text-2xl">Impressum</div>
                <div className='mt-3'>Simon Gneuß</div>

                    Birkenweg 6
                <br />09569 Oederan
                <br/><br/>
                    <div>Kontakt</div>

                    E-Mail: info@simongneuss.com
                <Footer />
            </div>
        </main>
    )
}
