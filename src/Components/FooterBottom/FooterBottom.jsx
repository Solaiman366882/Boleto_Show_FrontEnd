import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";


const FooterBottom = () => {
    return (
        <div>
            <div className="icon-area">
                <Link to="/"><img src={logo} alt="" /></Link>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterBottom;