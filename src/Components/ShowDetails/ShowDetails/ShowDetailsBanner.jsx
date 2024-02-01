import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { IoStopwatchOutline } from "react-icons/io5";
import defaultImg from "../../../assets/Images/banner03.jpg";
import {
	FaFacebookF,
	FaGoogle,
	FaInstagram,
	FaPinterest,
	FaTwitter,
} from "react-icons/fa";

const ShowDetailsBanner = ({ show }) => {
	const { image, name, language, genres, premiered, runtime } = show || {};
	return (
		<div className="details-banner">
			{image ? (
				<img className="banner-img" src={image.original} alt={name} />
			) : (
				<img
					className="banner-img"
					src={defaultImg}
					alt="default image"
				></img>
			)}
			<div>
				<Container>
					<div className="details-area">
						<div className="details-hero">
							<h2>{name}</h2>
							<p className="language">{language}</p>
							<ul className="d-flex gap-3 d-genre">
								{genres &&
									genres.map((genre, idx) => (
										<li key={idx}>{genre}</li>
									))}
							</ul>
							<div className="d-flex justify-content-between">
								<div className="d-flex gap-3">
									<p className="d-flex align-items-center gap-2">
										<FaCalendarAlt />{" "}
										<span>{premiered}</span>
									</p>
									<p className="d-flex align-items-center gap-2">
										<IoStopwatchOutline />{" "}
										<span>{runtime} min</span>
									</p>
								</div>
								<ul className="d-flex gap-3 d-icons">
									<li>
										<FaFacebookF className="details-icon" />
									</li>
									<li>
										<FaTwitter className="details-icon"></FaTwitter>
									</li>
									<li>
										<FaPinterest className="details-icon"></FaPinterest>
									</li>
									<li>
										<FaGoogle className="details-icon"></FaGoogle>
									</li>
									<li>
										<FaInstagram className="details-icon"></FaInstagram>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

ShowDetailsBanner.propTypes = {
	show: PropTypes.object,
};

export default ShowDetailsBanner;
