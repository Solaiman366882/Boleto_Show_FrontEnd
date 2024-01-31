import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayouts = () => {
	return (
		<div>
			<div><Header></Header></div>
			<div>
				<Outlet></Outlet>
			</div>
			<div>footer</div>
		</div>
	);
};

export default MainLayouts;
