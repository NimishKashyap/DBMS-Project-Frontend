import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// description: "N/A"
// dislikes: 4
// idvideo: 1
// likes: 6
// path: "shot1"
// title: "N/A"
// uploadDate: "2021-11-09T10:58:53.000Z"
// userid: 1
// views: 51
function Videos() {
    const router = useRouter();

    const [path, setPath] = useState("");
    const [description, setDescription] = useState("");
    const [idvideo, setIdvideo] = useState("");
    const [title, setTitle] = useState("");
    const [likes, setLikes] = useState(0);
    const [uploadDate, setUploadDate] = useState("");
    const [userId, setUserId] = useState(0);
    const [views, setViews] = useState(0);

    useEffect(() => {
        const id = router.query.id;
        if (id) {
            localStorage.setItem("id", id);
        }
        axios
            .get("http://localhost:3005/backend/video", {
                headers: {
                    idvideo: id ? id : localStorage.getItem("id"),
                },
            })
            .then((res) => {
                setPath(res.data[0].path);
                setDescription(res.data[0].description);
                setIdvideo(res.data[0].idvideo);
                setTitle(res.data[0].title);
                setLikes(res.data[0].likes);
                setUploadDate(res.data[0].uploadDate);
                setUserId(res.data[0].userid);
                setViews(res.data[0].views);
                console.log(path);
            });
    }, []);
    return (
        <>
            {path && (
                <video
                    className="m-4 p-4 rounded-md object-cover"
                    width="1024"
                    height="768"
                    controls
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src={`http://localhost:3005/backend/video/get/${path}`}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
        </>
    );
}
export default Videos;
