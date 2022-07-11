import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Modal1({ moviesData, moviesfun }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [release, setRelease] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const addNewMovie = (image, rate, release, name) => {
    moviesfun([
      ...moviesData,
      { image: image, rating: rate, year: release, name: name },
    ]);
    handleClose();
    setImage("");
    setRelease("");
    setName("");
    setRate("");
  };

  return (
    <div>
      <Button
        variant="secondary"
        style={{ width: "150px" }}
        onClick={handleShow}
      >
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Movie Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Year Of Release</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Year Of Release"
                value={release}
                onChange={(e) => setRelease(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Rate Number"
                min={1}
                max={5}
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => addNewMovie(image, rate, release, name)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modal1;
