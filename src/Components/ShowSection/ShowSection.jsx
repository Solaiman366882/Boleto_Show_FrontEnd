import { useEffect, useState } from "react";
import ShowCard from "../ShowCard/ShowCard";
import {  Container } from "react-bootstrap";

const ShowSection = () => {
	const [shows, setShows] = useState([]);

	useEffect(() => {
		fetch("https://api.tvmaze.com/search/shows?q=all")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setShows(data);
			});
	}, []);

	return (
		<div className="section-padding">
			<Container>
				<div className="show-area">
					{shows.map((show) => (
						<ShowCard key={show.show.id} show={show}></ShowCard>
					))}
				</div>
			</Container>
		</div>
	);
};

export default ShowSection;
