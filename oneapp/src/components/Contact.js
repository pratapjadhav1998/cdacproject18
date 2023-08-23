import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Card.css";
class Contact extends Component {
  render() {
    return (
      <>
        <div class="bg-image1">
          {/* <h2>Contact Details:</h2> */}
          <Container>
            
            <Row>
              <Col sm-6>
                <div class="text-header5">
                  {/* <h2 style={{ color: "skyblue" }}>Contact Details:</h2> */}
                  <Card
                    style={{
                      width: "20rem",
                      color: "black",
                      backgroundColor: "skyblue",
                    }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      {/* <Card.Title c>Project Partners</Card.Title> */}
                      <Card.Text>
                        <p>
                          <b>Name:</b> <i>Pratap Jadhav</i>
                        </p>
                        <p>
                          <b>Email Id:</b> <i>pjcdac2023@gmail.com</i>
                        </p>
                        <p>
                          <b>Mobile Number:</b> <i>9673216023</i>
                        </p>
                        <p>
                          <b>Address:</b> <i>pune, Maharashtra</i>
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm-6>
                <div class="text-header5">
                  {/* <h2 style={{ color: "skyblue" }}>Contact Details:</h2> */}
                  <Card
                    style={{
                      width: "20rem",
                      color: "black",
                      backgroundColor: "skyblue",
                    }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      {/* <Card.Title c>Project Partners</Card.Title> */}
                      <Card.Text>
                        <p>
                          <b>Name:</b> <i>Avinash Musale</i>
                        </p>
                        <p>
                          <b>Email Id:</b> <i>avinashmusale1505@gmail.com</i>
                        </p>
                        <p>
                          <b>Mobile Number:</b> <i>8380874189</i>
                        </p>
                        <p>
                          <b>Address:</b> <i>latur, Maharashtra</i>
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <col></col>
            </Row>
            {/* </Container> */}
           
            <Row>
              <Col sm-6>
                <div class="text-header5">
                  {/* <h2 style={{ color: "skyblue" }}>Contact Details:</h2> */}
                  <Card
                    style={{
                      width: "20rem",
                      color: "black",
                      backgroundColor: "skyblue",
                    }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      {/* <Card.Title c>Project Partners</Card.Title> */}
                      <Card.Text>
                        <p>
                          <b>Name:</b> <i>Akash Karape</i>
                        </p>
                        <p>
                          <b>Email Id:</b> <i>akashkarpe1@gmail.com</i>
                        </p>
                        <p>
                          <b>Mobile Number:</b> <i>9970703623</i>
                        </p>
                        <p>
                          <b>Address:</b> <i>Kolhapur, Maharashtra</i>
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm-6>
                <div class="text-header5">
                  {/* <h2 style={{ color: "skyblue" }}>Contact Details:</h2> */}
                  <Card
                    style={{
                      width: "20rem",
                      color: "black",
                      backgroundColor: "skyblue",
                    }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      {/* <Card.Title c>Project Partners</Card.Title> */}
                      <Card.Text>
                        <p>
                          <b>Name:</b> <i>Nandankumar Raskar</i>
                        </p>
                        <p>
                          <b>Email Id:</b> <i>nandankumarraskar@gmail.com</i>
                        </p>
                        <p>
                          <b>Mobile Number:</b> <i>9850009346</i>
                        </p>
                        <p>
                          <b>Address:</b> <i>Solapur,Maharshtra</i>
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <col></col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Contact;
