import Image from "next/image";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    ArrowUpIcon,
} from "@heroicons/react/outline";
import HeaderItems from "./HeaderItems";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function Navbar() {
    const [input, setInput] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push({
            pathname: "/search",
            query: {
                data: input,
            },
        });
    };
    // (err, res) => {
    // }

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <Image
                src={require("../public/logo.svg")}
                objectFit="cover"
                width={500}
                height={80}
            />
            <div className="flex items-center group w-1/3 p-3 px-5 bg-gray-600 rounded-3xl shadow-lg">
                <SearchIcon className="h-5 mb-1 mr-2" />
                <input
                    type="text"
                    className="outline-none bg-transparent w-full"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-gray-900 min-h-full px-4 py-1 rounded-3xl hover:scale-110 hover:shadow-lg"
                    onClick={handleSubmit}
                >
                    Enter
                </button>
            </div>
            <div className="flex flex-grow justify-evenly max-w-2xl mt-5">
                <Link href="/">
                    <a>
                        <HeaderItems title="HOME" Icon={HomeIcon} />
                    </a>
                </Link>
                <Link href="/user">
                    <a>
                        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
                    </a>
                </Link>
                <Link href="/upload">
                    <a>
                        <HeaderItems title="UPLOAD" Icon={ArrowUpIcon} />
                    </a>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;
