import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
	return (
		<div>
			<Navbar bg="dark" expand={"md"}>
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="m-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
