import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";

function Channels({data}) {
  const [channels, setChannels] = useState(true);

  const renderButtons = data.map((data) => {
    return (
      <button
        key={data}
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