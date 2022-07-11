import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Movies.css";
import { Card } from "react-bootstrap";

function MovieCrd(props) {
  // console.log(props.e);
  return (
    <div className="Cardcontain">
      <Link to={`/movie/${props.e.id}`} state={props.e}>
        <Card className="Card" style={{ width: "18rem", height: "500px" }}>
          <Card.Img variant="top" src={props.e.image} height="350px" />
          <Card.Body>
            <Card.Title>{props.e.name}</Card.Title>
            <Card.Text>{props.e.year}</Card.Text>
            <Card.Text>
              <Rating rate={props.e.rating} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default MovieCrd;
