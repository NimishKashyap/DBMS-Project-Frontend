import Thumbnail from "./Thumbnail";
function Results({ result }) {
    return (
        <div className="ml-8 flex flex-grow flex-col">
            {result.map((item) => (
                <Thumbnail key={item.idvideo} item={item} />
            ))}
        </div>
    );
}

export default Results;
