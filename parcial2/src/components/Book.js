import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "react-datepicker/dist/react-datepicker.css";

function Book({ name, isbn, author, publisher, genre, year, available_online, price, summary, addFunc }) {
const [addBookModal, invokeAddBkModal] = useState(false);

const initModalBk = () => {
    invokeAddBkModal(!addBookModal);
};

const invokeFunc = () => {
    addFunc({ nombre: nombre, descripcion: descripcion, diasDisp: diasDisp });
    initModalBk();
};

return (
    

);
}
export default Actividad;
