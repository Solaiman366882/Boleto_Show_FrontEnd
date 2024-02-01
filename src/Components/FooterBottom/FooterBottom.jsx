import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { FaFacebookF, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";



const FooterBottom = () => {
    return (
        <div>
            <div className="icon-area d-flex flex-column flex-md-row gap-3 justify-content-md-between justify-content-center">
                <Link to="/" className="d-block text-center"><img src={logo} className="mx-auto" alt="" /></Link>
                <ul className="d-flex justify-content-center gap-3">
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