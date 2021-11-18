import axios from "axios";
import { useEffect, useState } from "react";

function Comments({ id }) {
    const [comments, setComments] = useState([]);
    const [status, setStatus] = useState(0);
    useEffect(() => {
        axios
            .get("http://localhost:3005/backend/comments", {
                headers: {
                    idvideo: id,
                },
            })
            .then((res) => {
                setComments(res.data);
                console.log(comments);
            });
    }, []);
    
    return comments ? (
        <div className="flex flex-col flex-grow bg-gray-200 ml-5 mx-5 rounded-2xl">
            {comments && comments.map((item, idx) => {
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
