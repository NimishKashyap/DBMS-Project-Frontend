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

    const handleDeleteVideo = (item) => {
        console.log(item);
        let result = confirm("Are you sure?");
        setUserVideos(
            userVideos.filter((video) => video.idvideo !== item.idvideo)
        );
        result
            ? axios
                  .delete(`http://localhost:3005/backend/video`, {
                      headers: {
                          idvideo: item.idvideo,
                      },
                  })
                  .then((res) => {
                      console.log(res.data);
                      if (res.status === 200) {
                          alert("Video deleted");
                      }
                  })
            : null;
    };
    return (
        <div className="font-bold mx-10 bg-gray-900 text-gray-200 px-5 py-2 rounded-3xl flex flex-grow flex-col">
            USER VIDEOS
            {userVideos.length != 0 ? (
                userVideos.map((item, idx) => (
                    <div>
                        <div className="group cursor-pointer p-2 bg-gray-700 text-gray-50 my-3 transition duration-200 ease-in transform sm:hover:scale-105 sm:hover:translate-x-6 sm:hover:bg-gray-600 rounded-md sm:hover:z-50">
                            <h1 className="underline">{item.title}</h1>
                            <p>{item.description}</p>
                            <p>Likes: {item.likes}</p>
                            <p>Dislikes: {item.dislikes}</p>
                            <p>Views: {item.views}</p>
                        </div>
                        <span
                            onClick={() => {
                                handleDeleteVideo(item);
                            }}
                            className="bg-red-600 p-2 px-5 rounded-3xl hover:bg-red-800 hover:cursor-pointer transition duration-150"
                        >
                            DELETE
                        </span>
                    </div>
                ))
            ) : (
                <div>No Videos!</div>
            )}
        </div>
    );
}

export default GetUserVideos;
