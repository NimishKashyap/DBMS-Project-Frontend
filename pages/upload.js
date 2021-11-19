import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
//     const title = req.body.videoTitle || "N/A";
//     const descripton = req.body.description || "N/A";
//     const views = Math.floor(Math.random()*100);
//     const likes = Math.floor(Math.random()*100);
//     const dilikes = Math.abs(Math.floor(Math.random()*10));
//     const userid = req.body.userid || "1";

function upload() {
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [isSelected, setIsSelected] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userid, setUserId] = useState(0);

    const handleUpload = (e) => {
        e.preventDefault();
        console.log(file);
        let formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("userid", userid);

        if (isSelected) {
            axios
                .post("http://localhost:3005/backend/video", formData)
                .then((res) => {
                    alert("Video Uploaded Successfully");
                    router.push("/");
                });
        }
    };
    useEffect(() => {
        setUserId(localStorage.getItem("iduser"));
        if (localStorage.getItem("iduser") === null) {
            router.push("/user");
        }
    }, []);
    return (
        <div>
            <Navbar />
            {userid ? (
                <div className="flex flex-col bg-gray-300 mx-10 py-10 rounded-2xl px-5">
                    <input
                        className="mx-20 px-6 py-3 rounded-2xl placeholder:text-gray-900 text-gray-900"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mx-20 my-5 px-6 py-5 rounded-2xl placeholder:text-gray-900 text-gray-900"
                    />

                    <span className="mx-20 text-white bg-gray-700 rounded-xl my-3 p-2">
                        SELECT A FILE
                    </span>
                    <input
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                            setIsSelected(true);
                        }}
                        className="mx-20 bg-gray-900"
                        type="file"
                        id="uploadFile"
                        name="uploadFile"
                    />
                    <button
                        type="submit"
                        onClick={handleUpload}
                        name="submit"
                        className="text-gray-50 bg-[#06202A] mx-auto px-10 py-2 rounded-2xl my-5"
                    >
                        Upload
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default upload;
