import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AddComments({ id, setStatus }) {
    // const [status, setStatus] = useState(0);
    const router = useRouter();
    const [comment, setComment] = useState("");
    const [user, setUser] = useState({});
    const [userid, setUserid] = useState(0);
    const handlePost = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("comment", comment);
        formData.append("iduser", user);
        formData.append("idvideo", id);

        axios
            .post("http://localhost:3005/backend/comments", formData)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    alert("Comment inserted");
                    setComment("");
                    setStatus((state) => state + 1);
                }
            });
    };
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("iduser")));
    }, []);
    return (
        <div className="flex flex-col text-gray-900 min-h-20 p-5 px-24 bg-gray-500 rounded-lg items-start h-full">
            <input
                type="text"
                placeholder="Enter Comments"
                value={comment}
                className="placeholder:text-gray-900 rounded-2xl px-5 py-2"
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                className="text-gray-50 w-full my-3 bg-gray-900 px-2 py-3 rounded-lg hover:bg-gray-500 shadow-2xl transform scale-105 transition duration-100"
                onClick={handlePost}
            >
                POST
            </button>
        </div>
    );
}

export default AddComments;
