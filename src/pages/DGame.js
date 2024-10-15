import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; // Pastikan CSS Anda sesuai atau ubah nama jika perlu

export default function DGame() {
    const { id } = useParams();

    // Game details sebagai data dummy
    const gameDetails = {
        1: {
            title: "The Last of Us",
            genre: "action, adventure",
            rate: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8ZdikZXXUJAT7Ze4Ep0902eoY6AEezacPQ&s",
            synopsis: "A post-apocalyptic story where Joel and Ellie traverse a devastated United States, facing both infected creatures and hostile human factions."
        },
        2: {
            title: "God of War",
            genre: "action, adventure",
            rate: 5,
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/God_of_War_%28Norse%29_logo.png/375px-God_of_War_%28Norse%29_logo.png",
            synopsis: "Kratos embarks on a journey with his son Atreus in the realms of Norse mythology, facing gods, monsters, and personal demons."
        },
        3: {
            title: "Red Dead Redemption 2",
            genre: "action, adventure",
            rate: 5,
            img: "https://upload.wikimedia.org/wikipedia/id/4/44/Red_Dead_Redemption_II.jpg",
            synopsis: "Arthur Morgan, an outlaw and member of the Van der Linde gang, navigates loyalty, survival, and morality in the dying days of the Wild West."
        },
        4: {
            title: "Minecraft",
            genre: "sandbox, survival",
            rate: 4,
            img: "https://upload.wikimedia.org/wikipedia/id/thumb/f/f9/Minecraft_cover_%28new%29.jpg/375px-Minecraft_cover_%28new%29.jpg",
            synopsis: "A sandbox game that allows players to build, explore, and survive in a procedurally generated world made of blocks."
        },
        5: {
            title: "Fortnite",
            genre: "battle royale",
            rate: 4,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/FortniteLogo.svg/375px-FortniteLogo.svg.png",
            synopsis: "A battle royale game where 100 players fight to be the last one standing on a constantly shrinking map."
        },
    };

    const game = gameDetails[id];

    if (!game) {
        return <div className="detail-container">Game tidak ditemukan.</div>;
    }

    return (
        <div className="detail-container">
            <div className="detail-card">
                <img src={game.img} alt={game.title} className="game-poster" />
                <div className="game-info">
                    <h1 className="game-title">{game.title}</h1>
                    <p className="game-genre">Genre: {game.genre}</p>
                    <p className="game-rate">Rate: {game.rate}</p>
                    <p className="game-synopsis">Synopsis: {game.synopsis}</p>
                </div>
            </div>
        </div>
    );
}
