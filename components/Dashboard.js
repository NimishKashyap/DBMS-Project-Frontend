import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import GetUserVideos from "./GetUserVideos";

function Dashboard() {
    const [userData, setUserData] = useState([
        { iduser: "", name: "", age: "", email: "" },
    ]);

    const handleLogOut = () => {
        localStorage.clear();
        router.push("/");
    };
    useEffect(() => {
        axios
            .get("http://localhost:3005/backend/user", {
                headers: {
                    iduser: localStorage.getItem("iduser"),
                },
            })
            .then((res) => {
                setUserData(res.data);
                console.log(res.data);
                if (!userData[0]) {
                    localStorage.setItem("user", false);
                }
            });
    }, []);
    return (
        <>
            <div className="mx-10 min-w-full bg-gray-100 justify-center items-center text-gray-800 py-40 rounded-2xl">
                <div className="flex">
                    <div className="min-w-min bg-[#06202A] text-gray-50 p-40 rounded-2xl shadow-2xl">
                        <h1 className="font-bold italic text-2xl underline mb-5">
                            User Dashboard
                        </h1>
                        <p className="bg-white bg-opacity-25 px-10 py-3 my-5 rounded-3xl hover:bg-opacity-50">
                            User ID: {userData[0].iduser}
                        </p>
                        <p className="bg-white bg-opacity-25 px-10 py-3 my-5 rounded-3xl hover:bg-opacity-50">
                            User Name: {userData[0].name}
                        </p>
                        <p className="bg-white bg-opacity-25 px-10 py-3 my-5 rounded-3xl hover:bg-opacity-50">
                            User Age: {userData[0].age}
                        </p>
                        <p className="bg-white bg-opacity-25 px-10 py-3 my-5 rounded-3xl hover:bg-opacity-50">
                            User Email: {userData[0].email}
                        </p>
                    </div>
                    <GetUserVideos />
                </div>
                <button
                    onClick={handleLogOut}
                    className="bg-[#42887C] px-10 py-3 mt-5 rounded-3xl shadow-lg text-gray-50 font-bold hover:scale-125 duration-100 hover:bg-[#289785]"
                >
                    Log Out
                </button>
            </div>
        </>
    );
}

export default Dashboard;
