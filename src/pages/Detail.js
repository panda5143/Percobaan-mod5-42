import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; // Import the CSS file for styling

export default function Detail() {
    const { id } = useParams();

    // Fetch movie detail using the id if needed, or use dummy data
    const movieDetails = {
        1: {
            title: "John Wick 4",
            genre: "action, crime",
            rate: 4,
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            synopsis: `mendapati dirinya menjadi buruan dari seluruh dunia. Dengan hadiah sebesar $14 juta di kepalanya, para pembunuh profesional dari berbagai belahan dunia berusaha mengejar dan menghabisinya. Dalam usaha untuk membebaskan dirinya dari cengkeraman organisasi rahasia yang telah mengekang hidupnya, John terpaksa berali dengan teman-teman dan musuh-musuhnya. 
            Sambil berkelana dari New York ke berbagai lokasi internasional yang menakjubkan, John Wick bertemu dengan karakter-karakter baru yang masing-masing memiliki agenda dan koneksi dengan dunia kejahatan. Dia harus menghadapi musuh yang lebih kuat dan licik, termasuk seorang raja baru dalam dunia kejahatan, yang mengendalikan pasukan assassin tak terduga.
            Di tengah aksi pertarungan yang mendebarkan dan pengkhianatan yang mengejutkan, John Wick berjuang untuk menemukan jalan pulang dan membuktikan bahwa dia masih bisa mengendalikan takdirnya sendiri. Dengan pertarungan yang intens, pencarian balas dendam, dan momen-momen emosional yang mendalam, "John Wick 4" membawa penonton dalam perjalanan penuh ketegangan hingga akhir yang tak terduga.`
        },
        2: {
            title: "John Wick 4",
            genre: "action, crime",
            rate: 4,
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            synopsis: `mendapati dirinya menjadi buruan dari seluruh dunia. Dengan hadiah sebesar $14 juta di kepalanya, para pembunuh profesional dari berbagai belahan dunia berusaha mengejar dan menghabisinya. Dalam usaha untuk membebaskan dirinya dari cengkeraman organisasi rahasia yang telah mengekang hidupnya, John terpaksa berali dengan teman-teman dan musuh-musuhnya. 
            Sambil berkelana dari New York ke berbagai lokasi internasional yang menakjubkan, John Wick bertemu dengan karakter-karakter baru yang masing-masing memiliki agenda dan koneksi dengan dunia kejahatan. Dia harus menghadapi musuh yang lebih kuat dan licik, termasuk seorang raja baru dalam dunia kejahatan, yang mengendalikan pasukan assassin tak terduga.
            Di tengah aksi pertarungan yang mendebarkan dan pengkhianatan yang mengejutkan, John Wick berjuang untuk menemukan jalan pulang dan membuktikan bahwa dia masih bisa mengendalikan takdirnya sendiri. Dengan pertarungan yang intens, pencarian balas dendam, dan momen-momen emosional yang mendalam, "John Wick 4" membawa penonton dalam perjalanan penuh ketegangan hingga akhir yang tak terduga.`
        },
        3: {
            title: "John Wick 4",
            genre: "action, crime",
            rate: 4,
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            synopsis: `mendapati dirinya menjadi buruan dari seluruh dunia. Dengan hadiah sebesar $14 juta di kepalanya, para pembunuh profesional dari berbagai belahan dunia berusaha mengejar dan menghabisinya. Dalam usaha untuk membebaskan dirinya dari cengkeraman organisasi rahasia yang telah mengekang hidupnya, John terpaksa berali dengan teman-teman dan musuh-musuhnya. 
            Sambil berkelana dari New York ke berbagai lokasi internasional yang menakjubkan, John Wick bertemu dengan karakter-karakter baru yang masing-masing memiliki agenda dan koneksi dengan dunia kejahatan. Dia harus menghadapi musuh yang lebih kuat dan licik, termasuk seorang raja baru dalam dunia kejahatan, yang mengendalikan pasukan assassin tak terduga.
            Di tengah aksi pertarungan yang mendebarkan dan pengkhianatan yang mengejutkan, John Wick berjuang untuk menemukan jalan pulang dan membuktikan bahwa dia masih bisa mengendalikan takdirnya sendiri. Dengan pertarungan yang intens, pencarian balas dendam, dan momen-momen emosional yang mendalam, "John Wick 4" membawa penonton dalam perjalanan penuh ketegangan hingga akhir yang tak terduga.`
        },
        4: {
            title: "Oppenheimer",
            genre: "biography, drama, history",
            rate: 4,
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            synopsis: `"Oppenheimer" mengisahkan perjalanan hidup J. Robert Oppenheimer, seorang fisikawan teoretis yang dikenal sebagai 'Bapak Bom Atom.' Film ini menjelajahi perjalanan intelektual dan emosional Oppenheimer, dari masa studinya di Eropa hingga keterlibatannya dalam Proyek Manhattan selama Perang Dunia II, yang bertujuan untuk menciptakan senjata nuklir pertama. 
            Seiring dengan perkembangan teknologi nuklir, Oppenheimer menghadapi dilema moral yang mendalam mengenai konsekuensi dari penemuan yang ia ciptakan, sambil juga memperlihatkan tantangan dan konflik dalam hubungan pribadinya dan tekanan yang dihadapinya setelah perang. Dengan penggambaran yang mendalam dan penuh ketegangan, "Oppenheimer" menggali tema-tema seperti tanggung jawab ilmiah, moralitas, dan dampak dari keputusan yang diambil dalam penciptaan senjata yang mampu menghancurkan dunia.`
        },
        5: {
            title: "Oppenheimer",
            genre: "biography, drama, history",
            rate: 4,
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            synopsis: `"Oppenheimer" mengisahkan perjalanan hidup J. Robert Oppenheimer, seorang fisikawan teoretis yang dikenal sebagai 'Bapak Bom Atom.' Film ini menjelajahi perjalanan intelektual dan emosional Oppenheimer, dari masa studinya di Eropa hingga keterlibatannya dalam Proyek Manhattan selama Perang Dunia II, yang bertujuan untuk menciptakan senjata nuklir pertama. 
            Seiring dengan perkembangan teknologi nuklir, Oppenheimer menghadapi dilema moral yang mendalam mengenai konsekuensi dari penemuan yang ia ciptakan, sambil juga memperlihatkan tantangan dan konflik dalam hubungan pribadinya dan tekanan yang dihadapinya setelah perang. Dengan penggambaran yang mendalam dan penuh ketegangan, "Oppenheimer" menggali tema-tema seperti tanggung jawab ilmiah, moralitas, dan dampak dari keputusan yang diambil dalam penciptaan senjata yang mampu menghancurkan dunia.`
        },
        6: {
            title: "Oppenheimer",
            genre: "biography, drama, history",
            rate: 4,
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            synopsis: `"Oppenheimer" mengisahkan perjalanan hidup J. Robert Oppenheimer, seorang fisikawan teoretis yang dikenal sebagai 'Bapak Bom Atom.' Film ini menjelajahi perjalanan intelektual dan emosional Oppenheimer, dari masa studinya di Eropa hingga keterlibatannya dalam Proyek Manhattan selama Perang Dunia II, yang bertujuan untuk menciptakan senjata nuklir pertama. 
            Seiring dengan perkembangan teknologi nuklir, Oppenheimer menghadapi dilema moral yang mendalam mengenai konsekuensi dari penemuan yang ia ciptakan, sambil juga memperlihatkan tantangan dan konflik dalam hubungan pribadinya dan tekanan yang dihadapinya setelah perang. Dengan penggambaran yang mendalam dan penuh ketegangan, "Oppenheimer" menggali tema-tema seperti tanggung jawab ilmiah, moralitas, dan dampak dari keputusan yang diambil dalam penciptaan senjata yang mampu menghancurkan dunia.`
        },
        7: {
            title: "Oppenheimer",
            genre: "biography, drama, history",
            rate: 4,
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            synopsis: `"Oppenheimer" mengisahkan perjalanan hidup J. Robert Oppenheimer, seorang fisikawan teoretis yang dikenal sebagai 'Bapak Bom Atom.' Film ini menjelajahi perjalanan intelektual dan emosional Oppenheimer, dari masa studinya di Eropa hingga keterlibatannya dalam Proyek Manhattan selama Perang Dunia II, yang bertujuan untuk menciptakan senjata nuklir pertama. 
            Seiring dengan perkembangan teknologi nuklir, Oppenheimer menghadapi dilema moral yang mendalam mengenai konsekuensi dari penemuan yang ia ciptakan, sambil juga memperlihatkan tantangan dan konflik dalam hubungan pribadinya dan tekanan yang dihadapinya setelah perang. Dengan penggambaran yang mendalam dan penuh ketegangan, "Oppenheimer" menggali tema-tema seperti tanggung jawab ilmiah, moralitas, dan dampak dari keputusan yang diambil dalam penciptaan senjata yang mampu menghancurkan dunia.`
        },
        8: {
            title: "Oppenheimer",
            genre: "biography, drama, history",
            rate: 4,
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            synopsis: `"Oppenheimer" mengisahkan perjalanan hidup J. Robert Oppenheimer, seorang fisikawan teoretis yang dikenal sebagai 'Bapak Bom Atom.' Film ini menjelajahi perjalanan intelektual dan emosional Oppenheimer, dari masa studinya di Eropa hingga keterlibatannya dalam Proyek Manhattan selama Perang Dunia II, yang bertujuan untuk menciptakan senjata nuklir pertama. 
            Seiring dengan perkembangan teknologi nuklir, Oppenheimer menghadapi dilema moral yang mendalam mengenai konsekuensi dari penemuan yang ia ciptakan, sambil juga memperlihatkan tantangan dan konflik dalam hubungan pribadinya dan tekanan yang dihadapinya setelah perang. Dengan penggambaran yang mendalam dan penuh ketegangan, "Oppenheimer" menggali tema-tema seperti tanggung jawab ilmiah, moralitas, dan dampak dari keputusan yang diambil dalam penciptaan senjata yang mampu menghancurkan dunia.`
        },
        9: {
            title: "Oppenheimer",
            genre: "biography, drama, history",
            rate: 4,
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            synopsis: `"Oppenheimer" mengisahkan perjalanan hidup J. Robert Oppenheimer, seorang fisikawan teoretis yang dikenal sebagai 'Bapak Bom Atom.' Film ini menjelajahi perjalanan intelektual dan emosional Oppenheimer, dari masa studinya di Eropa hingga keterlibatannya dalam Proyek Manhattan selama Perang Dunia II, yang bertujuan untuk menciptakan senjata nuklir pertama. 
            Seiring dengan perkembangan teknologi nuklir, Oppenheimer menghadapi dilema moral yang mendalam mengenai konsekuensi dari penemuan yang ia ciptakan, sambil juga memperlihatkan tantangan dan konflik dalam hubungan pribadinya dan tekanan yang dihadapinya setelah perang. Dengan penggambaran yang mendalam dan penuh ketegangan, "Oppenheimer" menggali tema-tema seperti tanggung jawab ilmiah, moralitas, dan dampak dari keputusan yang diambil dalam penciptaan senjata yang mampu menghancurkan dunia.`
        },
        // Add more movies as needed
    };

    const movie = movieDetails[id];

    return (
        <div className="detail-container">
            <div className="detail-card">
                <img src={movie?.img} alt={movie?.title} className="movie-poster" />
                <div className="movie-info">
                    <h1 className="movie-title">{movie?.title}</h1>
                    <p className="movie-genre">Genre: {movie?.genre}</p>
                    <p className="movie-rate">Rate: {movie?.rate}</p>
                    <p className="movie-synopsis">Synopsis: {movie?.synopsis}</p>
                </div>
            </div>
        </div>
    );
}
