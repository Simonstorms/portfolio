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
                Policy
                <Footer />
            </div>
        </main>
    )
}
