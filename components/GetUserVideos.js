import axios from "axios";
import router from "next/router";
import { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";

function GetUserVideos() {
    const [userVideos, setUserVideos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3005/backend/videouser", {
                headers: {
                    iduser: localStorage.getItem("iduser"),
                },
            })
            .then((res) => {
                console.log("This is res data", res.data);
                setUserVideos(res.data);
                console.log(userVideos);
            });
    }, []);
    return (
        <div className="font-bold">
            USER VIDEOS
            {userVideos.map((item, idx) => (
                <div
                    onClick={() => {
                        // router.push("/video", {
                        //     query: {
                        //         id: item.idvideo,
                        //     },
                        // });
                    }}
                    className="group cursor-pointer p-2 bg-gray-700 text-gray-50 my-3 transition duration-200 ease-in transform sm:hover:scale-105 sm:hover:translate-x-6 sm:hover:bg-gray-600 rounded-md sm:hover:z-50"
                >
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Likes: {item.likes}</p>
                    <p>Dislikes: {item.dislikes}</p>
                    <p>Views: {item.views}</p>
                </div>
            ))}
        </div>
    );
}

export default GetUserVideos;
