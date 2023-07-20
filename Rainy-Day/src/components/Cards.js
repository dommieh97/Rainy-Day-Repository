import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import MyContext from "./MyContext";

function Cards(props) {
  const { firstEndPoint, setDisplayData, ray } = React.useContext(MyContext);
  const [liked, setLiked] = useState(false);
  const { author, url, title } = props.community;
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    ray.forEach((post) => {
      if (post.title === props.community.title) setLiked(true);
    });
  }, []);

  function deleteData(object) {
    setLiked(false)
    fetch(`http://localhost:4000/rays/${props.community.author}`, {
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
    const rayData = {
      postLink: props.community.postLink,
      subreddit: props.community.subreddit,
      title: props.community.title,
      url: props.community.url,
      nsfw: props.community.nsfw,
      spoiler: props.community.spoiler,
      author: props.community.author,
      ups: props.community.ups,
      id: props.community.author,
    };
    setLiked(true);

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

  function handleHover() {
    setIsHovered(true);
  }

  function handleLeave() {
    setIsHovered(false);
  }
  return (
    <Card
      style={{
        position: "relative",
        width: "80%",
        height: "100%",
        border: "none",
        color: "white",
        borderRadius: "15%",
        marginBottom: "20px",
        marginLeft: "20px",
        visibility: "visible",
      }}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onClick={() => {
        setDisplayData(props.community);
      }}
    >
      <Link to={`${firstEndPoint}/${author}`}>
        <Card.Img
          variant="top"
          className="card-img"
          src={url}
          style={{
            height: "33%",
            width: "100%",
            justifySelf: "stretch",
            borderRadius: "15%",
            marginBottom: "10px",
            opacity: isHovered ? "50%" : "100%",
          }}
          alt="oh no"
        />
      </Link>

      <Card.Body
        style={{
          position: "absolute",
          bottom: "25px",
          left: "16px",
          visibility: isHovered ? "visible" : "hidden",
        }}
      >
        {author}
      </Card.Body>
      {liked ? (
        <Button
          variant="danger"
          style={{
            position: "absolute",
            top: "10px",
            right: "16px",
            borderRadius: "50%",
            visibility: isHovered ? "visible" : "hidden",
          }}
          onClick={() => deleteData(props.community)}
        >
          👎
        </Button>
      ) : (
        <Button
          variant="danger"
          style={{
            position: "absolute",
            top: "10px",
            right: "16px",
            borderRadius: "50%",
            visibility: isHovered ? "visible" : "hidden",
          }}
          onClick={postData}
        >
          ♥
        </Button>
      )}
    </Card>
  );
}

export default Cards;