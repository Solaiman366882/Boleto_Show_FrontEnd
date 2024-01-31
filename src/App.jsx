
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
	

	return (
		<>
			<h1>Vite + React</h1>
			<Stack direction="horizontal" gap={2}>
				<Button as="a" variant="primary">
					
          <Link to="/about">Button as link</Link>
				</Button>
				<Button as="a" variant="success">
					Button as link
				</Button>
			</Stack>
			;
		</>
	);
}

export default App;
