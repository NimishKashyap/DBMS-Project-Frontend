import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";
import Description from "../components/Description";
import Comments from "../components/Comments";
import AddComments from "../components/AddComments";
import { useState } from "react";
function video() {
    const router = useRouter();
    const { id } = router.query;
    const [status, setStatus] = useState(0);

    return (
        <div>
            <Navbar />
            <div className="max-h-1/2 flex">
                <Videos id={id} />
                <Description id={id} />
            </div>
            <div className="flex justify-around">
                <Comments status={status} id={id} />
                <AddComments id={id} setStatus={setStatus}/>
            </div>
        </div>
    );
}

export default video;
