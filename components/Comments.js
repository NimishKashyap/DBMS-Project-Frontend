import axios from "axios";
import React, { useEffect, useState } from "react";

const commentContext = React.createContext();

function Comments({ id, status }) {
    const [comments, setComments] = useState([]);
    // const [status, setStatus] = useState(0);
    useEffect(() => {
        id != undefined
            ? localStorage.setItem("commentVideoID", JSON.stringify(id))
            : null;
        const idVideoComment = localStorage.getItem("commentVideoID");
        axios
            .get("http://localhost:3005/backend/comments", {
                headers: {
                    idvideo: idVideoComment,
                },
            })
            .then((res) => {
                setComments(res.data);
                console.log(comments);
            });
    }, []);
    useEffect(()=>{
        id != undefined
            ? localStorage.setItem("commentVideoID", JSON.stringify(id))
            : null;
        const idVideoComment = localStorage.getItem("commentVideoID");
        axios
            .get("http://localhost:3005/backend/comments", {
                headers: {
                    idvideo: idVideoComment,
                },
            })
            .then((res) => {
                setComments(res.data);
                console.log(comments);
            });
    },[status])
    return comments ? (
        <div className="flex flex-col flex-grow bg-gray-200 ml-5 mx-5 rounded-2xl">
            {comments &&
                comments.map((item, idx) => {
                    return (
                        <div className="bg-gray-900 m-2 p-2 rounded-lg">
                            <h1>User: {item.name}</h1>
                            <hr />
                            <p className="mt-2">{item.comment}</p>
                        </div>
                    );
                })}
        </div>
    ) : (
        <div>Comments placeholder</div>
    );
}

export default Comments;
export { commentContext };
