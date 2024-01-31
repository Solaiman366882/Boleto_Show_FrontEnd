import PropTypes from "prop-types";
import dummyImg from "../../assets/Images/Dummy.png";

const ShowCard = ({ show }) => {
	const { name, image, genres, runtime } = show.show || {};

	return (
		<div className="show-card">
			<div className="card-img">
				<img src={image ? image?.medium : dummyImg} alt="" />
				<div className="card-details">
					<div>
						<p className="d-flex gap-2 flex-wrap">
							<span className="d-flex flex-wrap">
								{genres && genres.length>2 ?
									genres.splice(0,1).map((genre, idx) => (
										<span key={idx}>
											{idx == 0 ? genre : `, ${genre}`}
										</span>
									)):
                                    genres && 
									genres.map((genre, idx) => (
										<span key={idx}>
											{idx == 0 ? genre : `, ${genre}`}
										</span>
									))}
							</span>
							{runtime && <span> / {runtime} min</span>}
						</p>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<h4>{name}</h4>
                        <button className="c-btn-small">Show more</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ShowCard.propTypes = {
	show: PropTypes.object,
};

export default ShowCard;
