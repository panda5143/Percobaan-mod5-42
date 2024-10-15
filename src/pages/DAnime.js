import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; // Pastikan CSS Anda sesuai atau ubah nama jika perlu

export default function DAnime() {
    const { id } = useParams();

    // Anime details sebagai data dummy
    const animeDetails = {
        1: {
            title: "Attack on Titan",
            genre: "action, drama",
            rate: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlS4sQ3H1ZrShcDaH9qWb8OaJT6VS3Ee3Scw&s",
            synopsis: "In a world where humanity lives inside enormous walled cities to protect themselves from Titans, giant humanoid creatures, Eren Yeager joins the fight to reclaim the world."
        },
        2: {
            title: "My Hero Academia",
            genre: "action, school",
            rate: 4,
            img: "https://upload.wikimedia.org/wikipedia/id/5/5a/Boku_no_Hero_Academia_Volume_1.png",
            synopsis: "A superhero-loving boy without powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero."
        },
        3: {
            title: "Demon Slayer",
            genre: "action, fantasy",
            rate: 5,
            img: "https://upload.wikimedia.org/wikipedia/id/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",
            synopsis: "Tanjiro Kamado joins the Demon Slayer Corps to hunt down the demon who slaughtered his family and turned his sister into a demon."
        },
        4: {
            title: "One Piece",
            genre: "adventure, fantasy",
            rate: 5,
            img: "https://upload.wikimedia.org/wikipedia/id/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
            synopsis: "Monkey D. Luffy sets off on an adventure to find the legendary treasure known as One Piece and become the King of the Pirates."
        },
        5: {
            title: "Naruto",
            genre: "action, adventure",
            rate: 5,
            img: "https://upload.wikimedia.org/wikipedia/id/thumb/a/ad/Naruto_-_Shippuden_DVD_season_1_volume_1.jpg/330px-Naruto_-_Shippuden_DVD_season_1_volume_1.jpg",
            synopsis: "Naruto Uzumaki, a young ninja with the Nine-Tails Fox sealed inside him, aims to become the Hokage, the strongest ninja in his village."
        },
    };

    const anime = animeDetails[id];

    if (!anime) {
        return <div className="detail-container">Anime tidak ditemukan.</div>;
    }

    return (
        <div className="detail-container">
            <div className="detail-card">
                <img src={anime.img} alt={anime.title} className="anime-poster" />
                <div className="anime-info">
                    <h1 className="anime-title">{anime.title}</h1>
                    <p className="anime-genre">Genre: {anime.genre}</p>
                    <p className="anime-rate">Rate: {anime.rate}</p>
                    <p className="anime-synopsis">Synopsis: {anime.synopsis}</p>
                </div>
            </div>
        </div>
    );
}
