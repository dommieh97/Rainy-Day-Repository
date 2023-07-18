import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import MyContext from "./MyContext";

function CardDisplay() {
const {dog} = useContext(MyContext);
const {url,author, postLink} = dog;
  return (
    <div style={{ padding: "10px"}}>
      <div className="card-display">
        <Card className="card-display" style={{}}>
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
              textAlign: "center",
              backgroundColor: "rgb(230,230,230)",
            }}
          >
            <div style={{ marginTop: "15px" }}>
              <a
                href={postLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ float: "left", marginLeft: "10px" }}
              >
                Link to reddit post
              </a>
              {true ? (
                <p
                  style={{
                    padding: "1px",
                    borderRadius: "5px",
                    backgroundColor: "red",
                    color: "black",
                    display: "inline",
                    float: "right",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    marginRight: "10px",
                  }}
                >
                  NSFW
                </p>
              ) : null}
            </div>
            <h1
              style={{
                border: "solid",
                borderColor: "blue",
                marginTop: "55px",
              }}
            >
              Old Man Max with the Dog Nice
            </h1>
            <p style={{ height: "50%", border: "solid", borderColor: "red" }}>
              Summary bommary bmmary bodmmary bodmmary bodmmary bodmmary
              bodmmary bodmmary bodmmary bododmmary bodmmary bodmmary boddy
            </p>
            <div style={{marginBottom: "50px", border:"solid"}}>comment section</div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardDisplay;