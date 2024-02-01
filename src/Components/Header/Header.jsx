import { Container, Offcanvas } from "react-bootstrap";
import logo from "../../assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="header-section">
			<Container>
				<nav className="menu-area">
					<div className="logo-area">
						<img src={logo} alt="" />
					</div>
					<div className="menu-btn lg-menu">
						<ul>
							<li>
								<NavLink
									to="/"
									className={({ isActive, isPending }) =>
										isPending
											? "pending"
											: isActive
											? "active"
											: ""
									}
								>
									home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className={({ isActive, isPending }) =>
										isPending
											? "pending"
											: isActive
											? "active"
											: ""
									}
								>
									about
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className={({ isActive, isPending }) =>
										isPending
											? "pending"
											: isActive
											? "active"
											: ""
									}
								>
									contact
								</NavLink>
							</li>
						</ul>
						<button className="c-btn">Join Us</button>
					</div>
					<div>
						<button className="show-menu" onClick={handleShow}>
							<FaBarsStaggered />
						</button>
						<Offcanvas show={show} onHide={handleClose}>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title><img src={logo}></img></Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<div className="menu-btn">
									<ul>
										<li>
											<NavLink
												to="/"
												className={({
													isActive,
													isPending,
												}) =>
													isPending
														? "pending"
														: isActive
														? "active"
														: ""
												}
											>
												home
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/about"
												className={({
													isActive,
													isPending,
												}) =>
													isPending
														? "pending"
														: isActive
														? "active"
														: ""
												}
											>
												about
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/about"
												className={({
													isActive,
													isPending,
												}) =>
													isPending
														? "pending"
														: isActive
														? "active"
														: ""
												}
											>
												contact
											</NavLink>
										</li>
									</ul>
									<button className="c-btn">Join Us</button>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</div>
				</nav>
			</Container>
		</div>
	);
};

export default Header;
