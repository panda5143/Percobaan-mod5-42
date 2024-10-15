import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./style.css";  // Create and import your Game.css for styling

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();

    const poster = [
        {
            title: "The Last of Us", id: 1,
            rate: 5,
            genre: "action, adventure",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8ZdikZXXUJAT7Ze4Ep0902eoY6AEezacPQ&s",
        },
        {
            title: "God of War", id: 2,
            rate: 5,
            genre: "action, adventure",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/God_of_War_%28Norse%29_logo.png/375px-God_of_War_%28Norse%29_logo.png",
        },
        {
            title: "Red Dead Redemption 2", id: 3,
            rate: 5,
            genre: "action, adventure",
            img: "https://upload.wikimedia.org/wikipedia/id/4/44/Red_Dead_Redemption_II.jpg",
        },
    ];

    const data = [
        {
            title: "Minecraft", id: 4,
            rate: 4,
            genre: "sandbox, survival",
            img: "https://upload.wikimedia.org/wikipedia/id/thumb/f/f9/Minecraft_cover_%28new%29.jpg/375px-Minecraft_cover_%28new%29.jpg",
        },
        {
            title: "Fortnite", id: 5,
            rate: 4,
            genre: "battle royale",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/FortniteLogo.svg/375px-FortniteLogo.svg.png",
        },
    ];

    return (
        <>
            <p id="games">Top Games</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            onClick={() => navigate(`/DGame/${item.id}`)}
                        />
                        {poster.length === index + 1 ? <div style={{ marginRight: 40 }} /> : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="games">All Games</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => navigate(`/DGame/${item.id}`)}
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
