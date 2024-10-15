import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; // Pastikan CSS Anda sesuai atau ubah nama jika perlu

export default function DBook() {
    const { id } = useParams();

    // Book details sebagai data dummy
    const bookDetails = {
        1: {
            title: "The Great Gatsby",
            genre: "classic, drama",
            rate: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUje-HplxGAYFscM2i2gHEST0QhX1qgCJlA&s",
            synopsis: "A portrayal of the Roaring Twenties and the enigmatic Jay Gatsby's pursuit of the American Dream."
        },
        2: {
            title: "1984",
            genre: "dystopian, political fiction",
            rate: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhi4WJbRcUel2BjP2lQKkYECVQzV3uBa_kQ&s",
            synopsis: "A chilling depiction of a totalitarian regime that employs surveillance and propaganda to control its citizens."
        },
        3: {
            title: "To Kill a Mockingbird",
            genre: "classic, drama",
            rate: 5,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
            synopsis: "A young girl's experience with racial injustice and moral growth in the American South."
        },
        4: {
            title: "The Catcher in the Rye",
            genre: "classic, fiction",
            rate: 4,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/330px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
            synopsis: "Holden Caulfield's journey through New York City as he grapples with adolescence and alienation."
        },
        5: {
            title: "Moby Dick",
            genre: "classic, adventure",
            rate: 4,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/330px-Moby-Dick_FE_title_page.jpg",
            synopsis: "Captain Ahab's obsessive quest to seek revenge on the giant white whale, Moby Dick."
        },
    };

    const book = bookDetails[id];

    if (!book) {
        return <div className="detail-container">Buku tidak ditemukan.</div>;
    }

    return (
        <div className="detail-container">
            <div className="detail-card">
                <img src={book.img} alt={book.title} className="book-poster" />
                <div className="book-info">
                    <h1 className="book-title">{book.title}</h1>
                    <p className="book-genre">Genre: {book.genre}</p>
                    <p className="book-rate">Rate: {book.rate}</p>
                    <p className="book-synopsis">Synopsis: {book.synopsis}</p>
                </div>
            </div>
        </div>
    );
}
