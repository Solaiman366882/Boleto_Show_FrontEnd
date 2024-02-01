import { Button, Container, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const TicketSection = ({ show }) => {
	const [showModal, setShowModal] = useState(false);
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [feedback, setFeedback] = useState("");

	const handleClose = () => {
		const userInfo = {
			userName,
			email,
			address,
			feedback,
			selectedMovie: show.name,
			movieId: show.id,
		};
		let allInfo = JSON.parse(localStorage.getItem("usersInfo")) || [];
		allInfo.push(userInfo);
		localStorage.setItem("usersInfo", JSON.stringify(allInfo));
		setShowModal(false);
		Swal.fire({
			title: "Good job!",
			text: "Your Information is Saved",
			icon: "success",
		});
	};
	const handleShow = () => setShowModal(true);

	return (
		<div className="ticket-section section-padding">
			<Container>
				<div className="ticket-area  d-flex justify-content-between gap-4 align-items-start">
					<div className="summery">
						<h2>Summery</h2>
						<p>{show.summary}</p>
					</div>
					<button className="c-btn" onClick={handleShow}>
						Book Tickets
					</button>
				</div>
			</Container>
			<div className="mmodal">
				<Modal
					show={showModal}
					onHide={handleClose}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							Book a Movie Ticket
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="form-area">
							<>
								<Form>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlInput1"
									>
										<Form.Label>Movie Name</Form.Label>
										<Form.Control
											type="text"
											placeholder={show.name}
											value={`${show.name} Movie`}
											readOnly
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlInput1"
									>
										<Form.Label>Your Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter Your Name"
											onChange={(e) =>
												setUserName(e.target.value)
											}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlInput1"
									>
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter Your Email"
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlInput1"
									>
										<Form.Label>Your Address</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter Your Address"
											onChange={(e) =>
												setAddress(e.target.value)
											}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label>
											Give us a Feedback
										</Form.Label>
										<Form.Control
											as="textarea"
											rows={3}
											onChange={(e) =>
												setFeedback(e.target.value)
											}
										/>
									</Form.Group>
								</Form>
							</>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={handleClose}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};

TicketSection.propTypes = {
	show: PropTypes.object,
};

export default TicketSection;
