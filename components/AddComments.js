import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AddComments({ id }) {
    const [status, setStatus] = useState(0);
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
                    // router.push(router.asPath);
                    window.location.reload();
                }
            });
    };
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("iduser")));
    }, []);
    return (
        <div className="flex flex-col flex-grow p-5 bg-gray-500 rounded-lg">
            <input
                type="text"
                placeholder="Enter Comments"
                value={comment}
                className="placeholder:text-gray-900 rounded-2xl px-5 py-2"
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handlePost}> POST </button>
        </div>
    );
}

export default AddComments;
