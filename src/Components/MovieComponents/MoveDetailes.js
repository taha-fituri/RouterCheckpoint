import React from "react";
import { Button } from "react-bootstrap";

import Rating from "./Rating";
import { useLocation, useNavigate } from "react-router-dom";
import "../../App.css";
import "./Movies.css";

function MoveDetailes() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  return (
    <div className="detailsdiv ">
      <img src={location.state.image} height="400px" alt="movies" />
      <div className="rate-name">
        <div style={{ width: "800px" }}>
          <h2 style={{ color: "white" }}>{location.state.name}</h2>
          <h3 style={{ color: "white" }}>{location.state.year}</h3>
          <h4 style={{ color: "white" }}>{location.state.description}</h4>
        </div>
        <div className="button-rate">
          <Rating rate={location.state.rating} />
          <Button
            style={{ marginTop: "4%" }}
            variant="secondary"
            onClick={() => navigate("/")}
          >
            Go Back
          </Button>
        </div>
      </div>

      <div>
        <iframe
          width="640"
          height="360"
          src={location.state.trailer}
          title={location.state.name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default MoveDetailes;
