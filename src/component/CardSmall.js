import { AiFillStar } from "react-icons/ai";
import PropTypes from 'prop-types';
import "./CardSmall.css";

export default function CardSmall({ title, genre, img, size, color, onClick }) {
    return (
        <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={img} alt={`${title} poster`} className="photo" />
            <div className="description">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div>
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} color={color} size={size} />
                    ))}
                </div>
            </div>
        </div>
    );
}

CardSmall.propTypes = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
