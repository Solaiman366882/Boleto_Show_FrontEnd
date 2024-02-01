import { Button, Container, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import Form from 'react-bootstrap/Form';

const TicketSection = ({ show }) => {
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
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
							<form action="">
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
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label>
											Give us a Feedback
										</Form.Label>
										<Form.Control as="textarea" rows={3} />
									</Form.Group>
								</Form>
							</form>
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
