import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import Book from "./Book.js";

function Home({ duration }) {

{
    /*Obtener libros disponibles*/
}
const [booksList, setBooksList] = useState([]);
useEffect(() => {
    if(!navigator.onLine){
        if(localStorage.getItem("booksList") === null) {
            setBooksList([])
        } else {
            setBooksList(JSON.parse(localStorage.getItem("booksList")));
        }
    } else {
        const url = "http://localhost:3000/books";
        fetch(url).then((response) => response.json()).then((data) => {
            setBooksList(data);
            localStorage.setItem("booksList", JSON.stringify(data));
        })
    }
}, []);


const booksSearched = booksList.map(bookI) => (
    <Book
    image={bookI.image}
    ISBN={bookI.isbn}
    name={bookI.name}
    />
));

const intl = useIntl();

return (
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col">
                </div>
                <div class="col">

                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="w-100"></div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="w-100"></div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="w-100"></div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="w-100"></div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
                <div class="col">Column
                </div>
            </div>
        </div>
    </div>
);
}
export default Home;
