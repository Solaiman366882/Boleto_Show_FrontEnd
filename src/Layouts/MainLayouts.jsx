import { Outlet } from "react-router-dom";

const MainLayouts = () => {
	return (
		<div>
			<div>header</div>
			<div>
				<Outlet></Outlet>
			</div>
			<div>footer</div>
		</div>
	);
};

export default MainLayouts;
