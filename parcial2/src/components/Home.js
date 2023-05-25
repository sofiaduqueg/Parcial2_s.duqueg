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

const handleBooksSearch = (event) => {
    const search = event.target.value;
    setSearchBooks(search);
    const newSearch = booksList.filter((searchBk) => {
    return searchBk.nombre.toLowerCase().includes(search.toLowerCase());
    });

    if (search === "") {
    setFilterBooks([]);
    } else {
    setFilterBooks(newSearch);
    }
};


const booksSearched = filterBooks.map((bookI) => (
    <Book
    ISBN={bookI.isbn}
    name={bookI.name}
    author={bookI.author}
    publisher={bookI.publisher}
    genre={bookI.genre}
    year={bookI.year}
    availability={bookI.availability}
    price={bookI.price}
    summary={bookI.summary}
    />
));

const intl = useIntl();

return (
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col">Column</div>
                <div class="col">Column</div>
                <div class="w-100"></div>
                <div class="col">Column</div>
                <div class="col">Column</div>
            </div>
        </div>
    </div>
);
}
export default Home;
