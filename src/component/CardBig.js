import { AiFillStar } from "react-icons/ai";
import PropTypes from 'prop-types';
import "./CardBig.css";

export default function CardBig({ img, title, genre, size, color, onClick }) {
    return (
        <div className="containerBig" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={img} alt={`${title} poster`} className="posterBig" />
            <div className="descriptionBig">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div className="stars">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} color={color} size={size} />
                    ))}
                </div>
            </div>
        </div>
    );
}

CardBig.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
