import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './CarItem.module.css';
import { useNavigate } from 'react-router-dom';

const CarItem = ({ car, isFavorite, onLikeClick }) => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/cars/${car.id}`);
    };

    const handleLikeClick = (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        onLikeClick(car.id);
    };

    return (
        <div className={styles.carItem} onClick={handleDetailClick}>
            {car.image && (
                <img className={styles.carImage} src={car.image} alt={`${car.marka} ${car.model}`} />
            )}
            <div className={styles.carInfo}>
                <div className={styles.header}>
                    <h2 className={styles.marka}>{car.marka} {car.model}</h2>
                    <span
                        className={`${styles.likeIcon} ${isFavorite ? styles.liked : ''}`}
                        onClick={handleLikeClick}
                    >
                        <FaHeart />
                    </span>
                </div>
                <div className={styles.details}>
                    <p>{car.year}/{car.mileage}km/{car.body_type}/{car.transmission}</p>
                </div>
                <div className={styles.footer}>
                    <p>{car.price} ₸</p>
                </div>
            </div>
        </div>
    );
};

export default CarItem;
