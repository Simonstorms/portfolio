"use client";
import Footer from "@/components/footer";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-10 ">
      <div className="px-8 w-full">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link className="flex items-center justify-center" href="/">
            <div className="border  p-3 dark:border-white border-black rounded-full ">
              <IoCloseOutline size={20} />
            </div>
          </Link>
        </motion.div>
        <div className="mt-10 text-5xl">Impressum</div>
        <div className="text-2xl">
          <div className="mt-8 ">Simon Gneuß</div>
          Birkenweg 6
          <br />
          09569 Oederan
          <br />
          <br />
          <div>Kontakt</div>
          E-Mail: info@simongneuss.com
        </div>
        <Footer />
      </div>
    </main>
  );
}
