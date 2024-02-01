import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
    const show = useLoaderData() || {};
    return (
        <div>
            this is show details of {show.name}
        </div>
    );
};

export default ShowDetails;