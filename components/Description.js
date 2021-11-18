import axios from "axios";
import { useEffect, useState } from "react";

function Description({ id }) {
    let videoData = [];
    const [videoItem, setVideoItem] = useState({});
    useEffect(() => {
        console.log(id);
        videoData = JSON.parse(localStorage.getItem("video"));
        console.log(videoData);
        setVideoItem(videoData.filter((item) => id == item.idvideo));
        console.log(videoItem);
    }, []);

    return videoData && videoItem[0] ? (
        <div className="bg-gray-200 flex flex-col items-start mx-5 px-5 my-5 flex-grow text-gray-900 rounded-2xl shadow-lg">
            <h1 className="font-bold mt-5 max-w-full">{videoItem[0].title}</h1>
            <hr className="min-w-full mb-5" />
            <p className="font-medium italic">{videoItem[0].description}</p>
            {/* {JSON.stringify(videoItem[0])} */}
        </div>
    ) : (
        <div>Description</div>
    );
}

export default Description;
