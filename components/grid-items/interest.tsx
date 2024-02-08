import GridItems from "@/config/site-config";


const Interest = () => {
    return (
        <div className="p-6">
            <div className="">{GridItems["interest"].title}</div>
            {/* text */}
            <div className="flex items-center ">
                <div className=" text-neutral-500">{GridItems["interest"].description}</div>
            </div>
        </div>

    );
};

export default Interest;