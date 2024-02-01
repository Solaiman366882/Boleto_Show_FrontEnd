import { useLoaderData } from "react-router-dom";
import ShowDetailsBanner from "../../Components/ShowDetails/ShowDetails/ShowDetailsBanner";
import TicketSection from "../../Components/ShowDetails/TicketSection/TicketSection";

const ShowDetails = () => {
    const show = useLoaderData() || {};
    return (
        <div>
            <ShowDetailsBanner show={show}></ShowDetailsBanner>
            <TicketSection show={show}></TicketSection>
        </div>
    );
};

export default ShowDetails;