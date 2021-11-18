import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Thumbnail from "../components/Thumbnail";
import SearchResult from "../components/SearchResult";
function search() {
    const router = useRouter();
    const {
        query: { data },
    } = router;
    console.log(data);
    const [search, setSearch] = useState([]);
    useEffect(() => {
        axios
            .post(
                "http://localhost:3005/backend/search",
                {
                    input: data,
                },
                {
                    headers: {
                        input: data,
                    },
                }
            )
            .then((res) => {
                setSearch(res.data);
                console.log(search);
            });
    }, [data]);
    const arr = [1, 2];
    return (
        <>
            <Head>
                <title>Search Result for "{data}"</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div>
                {/* {Object.keys(search).map((items) => {
                    return <SearchResult key={items} item={items} />;
                })} */}
                {search &&
                    search.map((items) => {
                        return <SearchResult key={items} item={items} />;
                    })}
            </div>
        </>
    );
}

export default search;
