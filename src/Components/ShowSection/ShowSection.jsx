import { useEffect, useState } from "react";
import ShowCard from "../ShowCard/ShowCard";
import { Container } from "react-bootstrap";

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
				<div className="d-flex justify-content-between text-center text-lg-start align-items-center title-section flex-column flex-lg-row">
					<div className="">
						<h2>Shows</h2>
						<p>Be sure not to miss these Shows today.</p>
					</div>
					<div className="d-flex flex-column flex-md-row gap-3">
						<button className="c-btn">Shows</button>
						<button className="c-btn">Coming Soon</button>
						<button className="c-btn">Exclusive</button>
					</div>
				</div>
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
