import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Card.css";
class About extends Component {
  render() {
    return (
      <>
        <div class="bg-image1">
          <Container>
            <Row>
              <Col sm>
                <div class="text-header1">
                  <Card style={{ width: "35rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Project Partners</Card.Title>
                      <Card.Text>
                        All of them passed out from CDAC INFOWAY batch of
                        march 2023.
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <col></col>
            </Row>

            <Row>
              <Col sm-6>
                {" "}
                <div class="text-header3">
                  <Card style={{ width: "35rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Pratap Jadhav</Card.Title>
                      <Card.Text>Determined,Self-Aware,Ambitious</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              
              <Col sm-6>
                {" "}
                <div class="text-header3">
                  <Card style={{ width: "35rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Akash Karape</Card.Title>
                      <Card.Text>Determined,Self-Dependant</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>


            
            <Row>
              
              <Col sm-6>
                {" "}
                <div class="text-header2">
                  <Card style={{ width: "35rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Avinash Musale</Card.Title>
                      <Card.Text>Enthusiastic,Passionate,Hardworker</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col sm-6>
                {" "}
                <div class="text-header2">
                  <Card style={{ width: "35rem", color: "black" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title c>Nandankumar Raskar</Card.Title>
                      <Card.Text>Enthusiastic,Honest</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>


            </Row>
           
         
          </Container>
        </div>
      </>
    );
  }
}

export default About;
