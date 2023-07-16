import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import MyContext from "./MyContext";

function CardDisplay() {
 const {dog} = useContext(MyContext);
 const {url,title,postLink} = dog;
  return (
    <div
      className="card-display"
      style={{
        // border: "solid",
        borderColor: "white",
        color: "black",
        margin: "40px",
        marginTop: "20px",
        borderRadius: "15px",
      }}
    >
      <Card className="card-display" style={{ display: "flex" }}>
        <Card.Img
          className="card-display-image"
          src={url}
          style={{
            width: "100%",
          }}
        />
        <Card.Body
          className="card-display-body"
          style={{
            width: "100%",
            border: "solid",
            borderColor: "red",
            textAlign: "center",
            backgroundColor: "rgb(230,230,230)",
          }}
        >
          <a
            href={postLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Original
          </a>
          <p
            style={{
              padding: "1px",
              borderRadius: "10px",
              backgroundColor: "red",
              color: "black",
              display: "inline-block",
            }}
          >
            {true ? "NSFW" : null}
          </p>
          <h1 style={{ border: "solid", borderColor: "blue" }}>
            {title}
          </h1>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDisplay;