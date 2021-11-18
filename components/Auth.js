import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
function Auth() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(null);

    const handleLogin = async () => {
        axios
            .post(
                "http://localhost:3005/backend/login",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        email,
                        password,
                    },
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Logged In Successfully");
                    console.log(res.data);
                    localStorage.setItem("user", true);
                    localStorage.setItem("iduser", res.data[0].iduser);
                    router.push("/");
                } else {
                    alert("Invalid Credentials");
                }
            });
    };
    const handleRegister = async () => {
        axios
            .post(
                "http://localhost:3005/backend/register",
                {
                    name,
                    email,
                    password,
                    age,
                },
                {
                    headers: {
                        name,
                        email,
                        password,
                        age,
                    },
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Register Successfully");
                    console.log(res.data[0]);
                    localStorage.setItem("user", true);
                    localStorage.setItem("iduser", res.data[0].iduser);
                    router.push("/");
                } else {
                    alert("ERROR!");
                }
            });
    };

    const register = () => {
        return (
            <div className="max-w-1/2 max-h-1/2 flex flex-col justify-center items-center bg-gray-700 my-7 mx-11 py-5 rounded-lg shadow-xl">
                <h1 className="font-bold text-2xl text-gray-200 my-7 py-5 bg-gray-900 mx-3 px-8 rounded-lg">
                    Register Here
                </h1>
                <div className="flex flex-col">
                    <input
                        type="text"
                        className="my-2 px-3 py-2 rounded-xl bg-gray-400 text-gray-900 placeholder-white focus:bg-white focus:placeholder-black"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="my-2 px-3 py-2 rounded-xl bg-gray-400 text-gray-900 placeholder-white focus:bg-white focus:placeholder-black"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="my-2 px-3 py-2 rounded-xl bg-gray-400 text-gray-900 placeholder-white focus:bg-white focus:placeholder-black"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="my-2 px-3 py-2 rounded-xl bg-gray-400 text-gray-900 placeholder-white focus:bg-white focus:placeholder-black"
                        type="text"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <a
                        className="underline text-blue-500  cursor-pointer"
                        onClick={(e) => setIsLoggedIn(true)}
                    >
                        Already have an account? Log In
                    </a>
                    <button
                        className="my-3 bg-gray-900 px-2 py-3 rounded-lg hover:bg-gray-500 shadow-2xl transform scale-105 transition duration-100"
                        type="submit"
                        onClick={handleRegister}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    };

    const login = () => {
        return (
            <div className="max-w-1/2 max-h-1/2 flex flex-col justify-center items-center bg-gray-700 my-7 mx-11 py-5 rounded-lg shadow-xl">
                <h1 className="font-bold text-2xl text-gray-200 my-7 py-5 bg-gray-900 mx-3 px-8 rounded-lg">
                    Login Here
                </h1>
                <div className="flex flex-col">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="my-2 px-3 py-2 rounded-xl bg-gray-400 text-gray-900 placeholder-white focus:bg-white focus:placeholder-black"
                        placeholder="Email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="my-2 px-3 py-2 rounded-xl bg-gray-400 text-gray-900 placeholder-white focus:bg-white focus:placeholder-black"
                        placeholder="Password"
                    />

                    <a
                        className="underline text-blue-500  cursor-pointer"
                        onClick={(e) => setIsLoggedIn(false)}
                    >
                        Don't have an account? Register here!
                    </a>
                    <button
                        className="my-3 bg-gray-900 px-2 py-3 rounded-lg hover:bg-gray-500 shadow-2xl transform scale-105 transition duration-100"
                        type="submit"
                        onClick={handleLogin}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    };
    return isLoggedIn ? login() : register();
}

export default Auth;
