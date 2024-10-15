import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./style.css";  // Create and import your Anime.css for styling

export default function Anime() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();

    const poster = [
        {
            title: "Attack on Titan", id: 1,
            rate: 5,
            genre: "action, drama",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlS4sQ3H1ZrShcDaH9qWb8OaJT6VS3Ee3Scw&s", 
        },
        {
            title: "My Hero Academia", id: 2,
            rate: 4,
            genre: "action, school",
            img: "https://upload.wikimedia.org/wikipedia/id/5/5a/Boku_no_Hero_Academia_Volume_1.png",
        },
        {
            title: "Demon Slayer", id: 3,
            rate: 5,
            genre: "action, fantasy",
            img: "https://upload.wikimedia.org/wikipedia/id/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",
        },
    ];

    const data = [
        {
            title: "One Piece", id: 4,
            rate: 5,
            genre: "adventure, fantasy",
            img: "https://upload.wikimedia.org/wikipedia/id/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
        },
        {
            title: "Naruto", id: 5,
            rate: 5,
            genre: "action, adventure",
            img: "https://upload.wikimedia.org/wikipedia/id/thumb/a/ad/Naruto_-_Shippuden_DVD_season_1_volume_1.jpg/330px-Naruto_-_Shippuden_DVD_season_1_volume_1.jpg",
        },
    ];

    return (
        <>
            <p id="anime">Top Anime</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            onClick={() => navigate(`/DAnime/${item.id}`)}
                        />
                        {poster.length === index + 1 ? <div style={{ marginRight: 40 }} /> : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="anime">All Anime</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => navigate(`/DAnime/${item.id}`)}
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
