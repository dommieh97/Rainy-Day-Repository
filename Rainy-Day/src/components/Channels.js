import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from React Router

import Stack from "react-bootstrap/Stack";

function Channels({ data }) {
  const [channels, setChannels] = useState(true);
  const location = useLocation().pathname;
console.log(data)
  const renderButtons = data.map((data) => {
    return (
      <Link to={`http://localhost:3000${location}/${data}`}> 
        <button
          style={{
            visibility: channels ? "visible" : "hidden",
            transition: "visibility 0s",
          }}
          className="chanBttn"
        >
          <strong>
            <strong style={{ fontSize: "16px", paddingRight: "7.5px" }}>#</strong>
            {data}
          </strong>
        </button>
      </Link>
    );
  });

  return (
    <div className="channels" style={{ color: "#6e7373" }}>
      <Stack gap={5}>
        <div style={{ width: "240px", position: "relative" }}>
          <strong id="smallchan">
            <small
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "5px",
                transform: channels ? "rotate(90deg)" : "rotate(0deg)",
                display: "inline-block",
                transition: "transform 0.3s ease",
              }}
              onClick={() => {
                setChannels(!channels);
              }}
            >
              {" "}
              &gt;{" "}
            </small>
            CHANNELS
          </strong>
          <span style={{ paddingLeft: "110px" }}>
            <span id="smallChanSpan">＋</span>
          </span>
        </div>

        {renderButtons}
      </Stack>
    </div>
  );
}

export default Channels;
