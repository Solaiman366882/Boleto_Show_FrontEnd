import { Container } from "react-bootstrap";
import FooterBottom from "../FooterBottom/FooterBottom";
import CopyRight from "../CopyRight/CopyRight";


const Footer = () => {
    return (
        <div className="footer-section">
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