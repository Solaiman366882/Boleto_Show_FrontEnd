import { TypeAnimation } from "react-type-animation";

const Banner = () => {
	return (
		<div className="banner-section">
			<div className="hero">
				<h1>
					book your <br /> tickets for <span><TypeAnimation
					sequence={[
						// Same substring at the start will only be typed out once, initially
						"Movie",
						2000, // wait 1s before replacing "Mice" with "Hamsters"
						"Events",
						2000,
						"Sports",
						2000,
					]}
					wrapper="span"
					speed={50}
					style={{  display: "inline-block" }}
					repeat={Infinity}
				/> </span>
				</h1>
				<h2>
					Safe, secure, reliable ticketing.Your ticket to live
					entertainment!
				</h2>
			</div>
		</div>
	);
};

export default Banner;
