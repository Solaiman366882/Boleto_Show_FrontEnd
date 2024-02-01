import { Container } from "react-bootstrap";
import FooterBottom from "../FooterBottom/FooterBottom";
import CopyRight from "../CopyRight/CopyRight";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
	return (
		<div className="footer-section">
			<Container>
				<div className="footer-newsletter">
					<Newsletter></Newsletter>
				</div>
			</Container>
			<div className="footer-area">
				<Container>
					<FooterBottom></FooterBottom>
					<CopyRight></CopyRight>
				</Container>
			</div>
		</div>
	);
};

export default Footer;
