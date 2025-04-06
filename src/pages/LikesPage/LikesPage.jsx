import React, { useEffect, useState } from 'react';
import CarItem from "../../components/CarItem/CarItem";
import NavBar from "../../components/NavBar/NavBar";
import styles from './LikesPage.module.css';

const LikesPage = () => {
    const [favoriteCars, setFavoriteCars] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            try {
                const response = await fetch('http://127.0.0.1:8000/cars/get_favorites/', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке избранных автомобилей');
                }
                const data = await response.json();
                setFavoriteCars(data);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    };

    const handleLikeClick = async (carId) => {
        // Тут логика для удаления из избранного
        try {
            await fetch(`http://127.0.0.1:8000/cars/remove_from_favorites/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify({ car_id: carId })
            });
            fetchFavorites(); // Обновляем список после удаления
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <h1>Избранные Автомобили</h1>
            <div className={styles.carsList}>
                {favoriteCars.map(car => (
                    <CarItem key={car.id} car={car} isFavorite={true} onLikeClick={() => handleLikeClick(car.id)} />
                ))}
            </div>
        </div>
    );
};

export default LikesPage;
