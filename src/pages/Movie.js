import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();  // Hook untuk navigasi

    const poster = [
        {
            title: "John Wick 4", id: 1,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            synopsis: "Setelah peristiwa yang menghancurkan di film sebelumnya, John Wick (Keanu Reeves) mendapati dirinya menjadi buruan dari seluruh dunia. Dengan hadiah sebesar $14 juta di kepalanya, para pembunuh profesional dari berbagai belahan dunia berusaha mengejar dan menghabisinya. Dalam usaha untuk membebaskan dirinya dari cengkeraman organisasi rahasia yang telah mengekang hidupnya, John terpaksa beralli dengan teman-teman dan musuh-musuhnya. Sambil berkelana dari New York ke berbagai lokasi internasional yang menakjubkan, John Wick bertemu dengan karakter-karakter baru yang masing-masing memiliki agenda dan koneksi dengan dunia kejahatan. Dia harus menghadapi musuh yang lebih kuat dan licik, termasuk seorang raja baru dalam dunia kejahatan, yang mengendalikan pasukan assassin tak terduga. Di tengah aksi pertarungan yang mendebarkan dan pengkhianatan yang mengejutkan, John Wick berjuang untuk menemukan jalan pulang dan membuktikan bahwa dia masih bisa mengendalikan takdirnya sendiri. Dengan pertarungan yang intens, pencarian balas dendam, dan momen-momen emosional yang mendalam, 'John Wick 4' membawa penonton dalam perjalanan penuh ketegangan hingga akhir yang tak terduga."
        },
        {
            title: "John Wick 4", id: 2,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            synopsis: "Setelah peristiwa yang menghancurkan di film sebelumnya, John Wick (Keanu Reeves) mendapati dirinya menjadi buruan dari seluruh dunia. Dengan hadiah sebesar $14 juta di kepalanya, para pembunuh profesional dari berbagai belahan dunia berusaha mengejar dan menghabisinya. Dalam usaha untuk membebaskan dirinya dari cengkeraman organisasi rahasia yang telah mengekang hidupnya, John terpaksa beralli dengan teman-teman dan musuh-musuhnya. Sambil berkelana dari New York ke berbagai lokasi internasional yang menakjubkan, John Wick bertemu dengan karakter-karakter baru yang masing-masing memiliki agenda dan koneksi dengan dunia kejahatan. Dia harus menghadapi musuh yang lebih kuat dan licik, termasuk seorang raja baru dalam dunia kejahatan, yang mengendalikan pasukan assassin tak terduga. Di tengah aksi pertarungan yang mendebarkan dan pengkhianatan yang mengejutkan, John Wick berjuang untuk menemukan jalan pulang dan membuktikan bahwa dia masih bisa mengendalikan takdirnya sendiri. Dengan pertarungan yang intens, pencarian balas dendam, dan momen-momen emosional yang mendalam, 'John Wick 4' membawa penonton dalam perjalanan penuh ketegangan hingga akhir yang tak terduga."
        },
        {
            title: "John Wick 4", id: 3,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            synopsis: "Setelah peristiwa yang menghancurkan di film sebelumnya, John Wick (Keanu Reeves) mendapati dirinya menjadi buruan dari seluruh dunia. Dengan hadiah sebesar $14 juta di kepalanya, para pembunuh profesional dari berbagai belahan dunia berusaha mengejar dan menghabisinya. Dalam usaha untuk membebaskan dirinya dari cengkeraman organisasi rahasia yang telah mengekang hidupnya, John terpaksa beralli dengan teman-teman dan musuh-musuhnya. Sambil berkelana dari New York ke berbagai lokasi internasional yang menakjubkan, John Wick bertemu dengan karakter-karakter baru yang masing-masing memiliki agenda dan koneksi dengan dunia kejahatan. Dia harus menghadapi musuh yang lebih kuat dan licik, termasuk seorang raja baru dalam dunia kejahatan, yang mengendalikan pasukan assassin tak terduga. Di tengah aksi pertarungan yang mendebarkan dan pengkhianatan yang mengejutkan, John Wick berjuang untuk menemukan jalan pulang dan membuktikan bahwa dia masih bisa mengendalikan takdirnya sendiri. Dengan pertarungan yang intens, pencarian balas dendam, dan momen-momen emosional yang mendalam, 'John Wick 4' membawa penonton dalam perjalanan penuh ketegangan hingga akhir yang tak terduga."
        },
    ];
    
    const data = [
        {
            title: "Oppenheimer", id: 4,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 5,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 6,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 7,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 8,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 9,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
    ];

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            onClick={() => navigate(`/detail/${item.id}`)}  // Navigasi ke halaman detail
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => navigate(`/detail/${item.id}`)}  // Navigasi ke halaman detail
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
                <div className="column">
                    <p id="movies">All Movies</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => navigate(`/detail/${item.id}`)}  // Navigasi ke halaman detail
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
