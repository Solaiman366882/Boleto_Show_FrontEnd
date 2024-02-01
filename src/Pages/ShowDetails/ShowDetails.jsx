import { useLoaderData } from "react-router-dom";
import ShowDetailsBanner from "../../Components/ShowDetails/ShowDetails/ShowDetailsBanner";

const ShowDetails = () => {
    const show = useLoaderData() || {};
    return (
        <div>
            <ShowDetailsBanner show={show}></ShowDetailsBanner>
        </div>
    );
};

export default ShowDetails;