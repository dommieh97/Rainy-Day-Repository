import React, { useContext, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import MyContext from "./MyContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CardDisplay() {
  const { displayData , ray} = useContext(MyContext);
  const { url, author, postLink, title } = displayData;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    ray.forEach((post) => {
      if (post.title === title) setLiked(true);
    });
  }, []);

  function deleteData(object) {
    setLiked(false)
    fetch(`http://localhost:4000/rays/${displayData.author}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Deleted data:", data);
      })
      .catch((error) => {
        console.error("Error fetching rays:", error);
      });
  }
  function postData() {
    setLiked(true)
    const rayData = {
      postLink: displayData.postLink,
      subreddit: displayData.subreddit,
      title: displayData.title,
      url: displayData.url,
      nsfw: displayData.nsfw,
      spoiler: displayData.spoiler,
      author: displayData.author,
      ups: displayData.ups,
      id: displayData.author
    };

    fetch("http://localhost:4000/rays", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rayData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
      })
      .catch((error) => {
        console.error("Error fetching rays:", error);
      });
  }

  return (
    <div
      className="card-display"
      style={{
        borderColor: "white",
        color: "black",
        margin: "40px",
        marginTop: "20px",
        borderRadius: "15px",
        position: "relative",
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
            border: "none",
            borderColor: "red",
            textAlign: "left",
            backgroundColor: "rgb(230,230,230)",
            position: "relative",
          }}
        >
          <div style={{ marginTop: "15px" }}>
            <a
              href={postLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", marginLeft: "25px" }}
            >
              Original Post
            </a>
            {liked ?(
              <Button
                size="lg"
                variant="danger"
                style={{
                  position: "relative",
                  top: "",
                  float:"right",
                  marginRight: "20px",
                  borderRadius: "50%",
                }}
                onClick={()=>deleteData(displayData)}
              >
                👎
              </Button>
            )  : (
              <Button
                size="lg"
                variant="danger"
                style={{
                  position: "relative",
                  top: "",
                  float:"right",
                  marginRight: "20px",
                  borderRadius: "50%",
                }}
                onClick={postData}
              >
                ♥
              </Button>
            ) }
          </div>
          {/*👎*/}
          <h1
            style={{
              border: "none",
              borderColor: "blue",
              marginTop: "80px",
              textAlign: "left",
              marginLeft: "25px",
              marginRight: "5px",
            }}
          >
            {title}
          </h1>
          <a
            style={{
              textAlign: "left",
              marginLeft: "25px",
              fontSize: "20px",
              cursor: "pointer",
              color: "black",
            }}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.reddit.com/user/${author}/`}
          >
            <strong>{author}</strong>
          </a>
          <p
            style={{
              border: "none",
              borderColor: "red",
              textAlign: "left",
              marginLeft: "25px",
            }}
          >
            Summary bommary bmmary bodmmary bodmmary bodmmary bodmmary bodmmary
            bodmmary bodmmary bododmmary bodmmary bodmmary boddy
          </p>
          <div
            style={{
              textAlign: "left",
              marginBottom: "50px",
              border: "none",
              marginLeft: "25px",
              fontSize: "20px",
            }}
          >
            <strong>Comments</strong>
            <div>asdasd</div>
          </div>
          <div className="comment-div">
            <Form style={{ position: "relative", display: "flex" }}>
              <Form.Control
                type="text"
                placeholder="Commento Plox"
                className="comment-input"
              />
              <Button variant="danger" className="add-comment-button">
                Add Comment
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDisplay;