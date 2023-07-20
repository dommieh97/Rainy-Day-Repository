import React from "react";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Communities({ setData }) {
  const homeButtons = ["my-rays"];
  const dogButtons = [
    "good-puppers",
    "german-shepherds",
    "corgis",
    "weeeenies",
    "alaskan-huskers",
    "Dogs-With-Hats",
  ];
  const catButtons = [
    "good-kitties",
    "shorthairs",
    "persians",
    "baldies",
    "siameses",
    "scottish-fold",
  ];
  const beachButtons = ["beach", "water"];
  const bobaButtons = ["boba", "thai-tea"];
  const foodButtons = [
    "food", 
    "italiano",
    'ramennnnnn',
    "bread...",
    "voigan",
    "is-that-even-edible"
];
  const natureButtons = ["nature", "wild"];
  const vgButtons = ["games", "nice games"];
  const dessertButtons = [
    "desserts", 
    "smol-cake",
    "cake-dress-up",
    "melty-yums",
    "ma-macarons",
    "sfw-pies-only"  
];
  const flowerButtons = ["flowers", "roses"];

  function handleHover(e) {
    e.target.style.borderRadius = "25%";
    e.target.style.transform = "scale(1.1)";
    e.target.style.transitionDuration = "0.5s";
  }
  function handleLeave(e) {
    e.target.style.borderRadius = "50%";
    e.target.style.transform = "scale(1)";
    e.target.style.transitionDuration = "0.5s";
  }
  return (
    <>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            margin: "14px",
            marginTop: "5px",
            marginBottom: "0px",
            height: "100px",
            // border: "solid",
            // borderColor: "red",
          }}
        >
          <div className="p-2">
            <br />

            <ButtonGroup size="sm">
              <Col xs={6} md={4}>
                <Link to="/Home">
                  <Image
                    alt="myHub"
                    src="https://cdn-icons-png.flaticon.com/128/6723/6723246.png"
                    roundedCircle
                    style={{
                      height: "52px",
                      width: "52px",
                      border: "solid",
                      borderRadius: "50%",
                      borderColor: "#707786",
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => setData(homeButtons)}
                    />
                </Link>
              </Col>
            </ButtonGroup>
          </div>

          <Dropdown.Divider style={{ width: "80px", color: "#707786" }} />
          <br />
        </div>
        <div
          className="scrollbar"
          id="style-1"
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            marginTop: "96px",
            marginBottom: "99px",
            position: "relative",
            flex: "1",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Stack
            gap={20}
            className="col-md-5 mx-auto"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              style={
                {
                  // position: "relative",
                  // marginTop: "95px",
                  // border: "solid",
                  // borderColor: "white",
                  // paddingTop: "5px",
                  // overflowY: "auto",
                  // overflowX: "hidden",
                  // maxHeight: "75vh",
                }
              }
            >
              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Dog">
                      <Image
                        id="dog"
                        src="https://cdn-icons-png.flaticon.com/128/7298/7298818.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(dogButtons)}
                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />

              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Cat">
                      <Image
                        id="cat"
                        src="https://cdn-icons-png.flaticon.com/128/1864/1864514.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(catButtons)}
                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />

              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Boba">
                      <Image
                        alt="boba"
                        src="https://cdn-icons-png.flaticon.com/128/3081/3081162.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(bobaButtons)}
                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />

              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Food">
                      <Image
                        alt="food"
                        src="https://cdn-icons-png.flaticon.com/128/1623/1623786.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(foodButtons)}
                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />

              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Dessert">
                      <Image
                        alt="dessert"
                        src="https://cdn-icons-png.flaticon.com/128/9997/9997743.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(dessertButtons)}
                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />

              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Beach">
                      <Image
                        alt="beach"
                        src="https://cdn-icons-png.flaticon.com/128/3722/3722618.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(beachButtons)}
                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />

              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Nature">
                      <Image
                        alt="nature"
                        src="https://cdn-icons-png.flaticon.com/128/3038/3038873.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(natureButtons)}
                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />

              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Flower">
                      <Image
                        alt="Flowers"
                        src="https://cdn-icons-png.flaticon.com/128/3200/3200044.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(flowerButtons)}
                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />

              <div className="p-2">
                <ButtonGroup size="sm">
                  <Col xs={6} md={4}>
                    <Link to="/Video-Games">
                      <Image
                        alt="videoGames"
                        src="https://cdn-icons-png.flaticon.com/128/1752/1752494.png"
                        roundedCircle
                        style={{
                          height: "52px",
                          width: "52px",
                          border: "solid",
                          borderRadius: "50%",
                          borderColor: "#707786",
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setData(vgButtons)}

                      />
                    </Link>
                  </Col>
                </ButtonGroup>
              </div>

              <br />
            </div>
          </Stack>
        </div>

        <div
          style={{
            height: "124px",
            position: "absolute",
            bottom: "0",
            margin: "15px",
            marginTop: "0px",
          }}
        >
          <br />
          <Dropdown.Divider style={{ width: "80px", color: "#707786" }} />

          <div className="p-2" style={{}}>
            <ButtonGroup size="sm">
              <Col xs={6} md={4}>
                <Image
                  alt="explore"
                  src="https://cdn-icons-png.flaticon.com/128/868/868355.png"
                  roundedCircle
                  style={{
                    height: "52px",
                    width: "52px",
                    border: "solid",
                    borderRadius: "50%",
                    borderColor: "#707786",
                  }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                />
              </Col>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default Communities;