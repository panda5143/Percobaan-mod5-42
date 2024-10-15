import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./style.css";  // Make sure your CSS file is named correctly

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();

    const poster = [
        {
            title: "The Great Gatsby", id: 1,
            rate: 5,
            genre: "classic, drama",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUje-HplxGAYFscM2i2gHEST0QhX1qgCJlA&s",
        },
        {
            title: "1984", id: 2,
            rate: 5,
            genre: "dystopian, political fiction",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhi4WJbRcUel2BjP2lQKkYECVQzV3uBa_kQ&s",
        },
        {
            title: "To Kill a Mockingbird", id: 3,
            rate: 5,
            genre: "classic, drama",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        },
    ];

    const data = [
        {
            title: "The Catcher in the Rye", id: 4,
            rate: 4,
            genre: "classic, fiction",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/330px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
        },
        {
            title: "Moby Dick", id: 5,
            rate: 4,
            genre: "classic, adventure",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/330px-Moby-Dick_FE_title_page.jpg",
        },
    ];

    return (
        <>
            <p id="books">Top Books</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            onClick={() => navigate(`/DBook/${item.id}`)}  // Changed here
                        />
                        {poster.length === index + 1 ? <div style={{ marginRight: 40 }} /> : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="books">All Books</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => navigate(`/DBook/${item.id}`)}  // This line remains unchanged
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}