import Auth from "../components/Auth";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import { useEffect, useState } from "react";
function user() {
    const [userState, setUserState] = useState(null);
    useEffect(() => {
        setUserState(localStorage.getItem("user"));
    }, []);
    return (
        <div>
            <Navbar />
            {userState ? <Dashboard /> : <Auth />}
        </div>
    );
}

export default user;
