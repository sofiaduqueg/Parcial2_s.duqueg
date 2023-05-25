import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "react-datepicker/dist/react-datepicker.css";

function Book({ name, isbn, image, addFunc }) {
const [addBookModal, invokeAddBkModal] = useState(false);

const initModalBk = () => {
    invokeAddBkModal(!addBookModal);
};

const invokeFunc = () => {
    addFunc({ name: name, image: image, isbn: isbn });
    initModalBk();
};

return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {isbn}
        </Card.Text>
      </Card.Body>
    </Card>


);
}
export default Book;
