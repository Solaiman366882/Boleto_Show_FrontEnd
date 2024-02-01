import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { FaFacebookF, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";



const FooterBottom = () => {
    return (
        <div>
            <div className="icon-area d-flex justify-content-between">
                <Link to="/"><img src={logo} alt="" /></Link>
                <ul className="d-flex gap-3">
                    <li><FaFacebookF  className="footer-icon"/></li>
                    <li><FaTwitter className="footer-icon"></FaTwitter></li>
                    <li><FaPinterest className="footer-icon"></FaPinterest></li>
                    <li><FaGoogle className="footer-icon"></FaGoogle></li>
                    <li><FaInstagram className="footer-icon"></FaInstagram></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterBottom;