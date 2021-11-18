import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";
import Description from "../components/Description";
import Comments from "../components/Comments";
import AddComments from "../components/AddComments";
function video() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Navbar />
            <div className="max-h-1/2 flex">
                <Videos id={id} />
                <Description id={id} />
            </div>
            <div className="flex justify-around">
                <Comments id={id} />
                <AddComments id={id} />
            </div>
        </div>
    );
}

export default video;
