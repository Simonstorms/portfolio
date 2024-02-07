import GridItems from "@/config/site-config";
import Link from "next/link";

const Blog = () => {
    return (
        <Link
            href={GridItems["Mentor"].buttonLink ?? ""}
            className="flex items-center justify-between gap-4"
        >
            <div className="w-full @lg:text-lg font-semibold">{GridItems["Mentor"].title}</div>
            {/* Price & Promo Container */}
            <div className="">
                {/* Top Container */}
                <div className="flex items-center justify-between">
                    <div className="text-xs text-neutral-500">PROMO</div>
                </div>
            </div>
        </Link>
    );
};

export default Blog;