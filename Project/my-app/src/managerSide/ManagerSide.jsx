import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  ListGroupItem,
  Button
} from "react-bootstrap";

const ManagerSide = () => {
  return (
    <>
      <Container>
        <Row>
          {fakeData.node.map((single, index) => (
            <Col sm={4}>
              <Card style={{ width: "300px", margin: "40px" }} key={index}>
                <Card.Img
                  variant="top"
                  src="https://img.icons8.com/color/144/000000/mcdonalds.png"
                />
                <Card.Body>
                  <Card.Title>Restaurants :{single.restaurantsName}</Card.Title>
                </Card.Body>
                <ListGroup>
                  <ListGroupItem>
                    Order Number : {single.orderNumber}
                  </ListGroupItem>
                  <ListGroupItem>Status: {single.Status}</ListGroupItem>
                  <ListGroupItem>Comments: {single.Comments}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button>Check</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export const fakeData = {
  node: [
    {
      restaurantsName: "fakeName1",
      orderNumber: "1",
      Status: "Waiting",
      Comments: "Null"
    },
    {
      restaurantsName: "fakeName2",
      orderNumber: "2",
      Status: "Waiting",
      Comments: "Lol"
    },
    {
      restaurantsName: "fakeName3",
      orderNumber: "3",
      Status: "Waiting",
      Comments: "Boo"
    },
    {
      restaurantsName: "fakeName4",
      orderNumber: "4",
      Status: "Waiting",
      Comments: "Haha"
    },
    {
      restaurantsName: "fakeName5",
      orderNumber: "5",
      Status: "Waiting",
      Comments: "Bye"
    },
    {
      restaurantsName: "fakeName6",
      orderNumber: "6",
      Status: "Waiting",
      Comments: "Hi"
    },
    {
      restaurantsName: "fakeName7",
      orderNumber: "7",
      Status: "Waiting",
      Comments: "go away"
    }
  ]
};

export default ManagerSide;
