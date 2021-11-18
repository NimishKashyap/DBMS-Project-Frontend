import { ThumbUpIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
function Thumbnail({ item }) {
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push("/video", {
                    query: {
                        id: item.idvideo,
                    },
                });
            }}
            className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 sm:hover:translate-x-6 sm:hover:bg-gray-600 rounded-md sm:hover:z-50"
        >
            <div className="p-2 align-center">
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                    {item.title}
                </h2>
                <p className="truncate max-w-md">{item.description}</p>
                <p className="opacity-0 group-hover:opacity-100">
                    {item.description}
                </p>
            </div>
            <hr className="w-full opacity-20" />
        </div>
    );
}

export default Thumbnail;
