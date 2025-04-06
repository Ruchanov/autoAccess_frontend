import React, { useEffect, useState } from 'react';
import CarItem from "../../components/CarItem/CarItem";
import NavBar from "../../components/NavBar/NavBar";
import styles from './CarListPage.module.css';
import { useNavigate } from "react-router-dom";
import FilterForm from "../../components/FilterForm/FilterForm";
import SearchForm from "../../components/SearchForm/SearchForm";

const CarListPage = () => {
    const [cars, setCars] = useState([]);
    const [filterParams, setFilterParams] = useState({
        year: '',
        marka: '',
        model: '',
        min_price: '',
        max_price: '',
        min_mileage: '',
        max_mileage: '',
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [favoriteCars, setFavoriteCars] = useState(new Set());
    const navigate = useNavigate();

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
                const favoriteIds = new Set(data.map(car => car.id));
                setFavoriteCars(favoriteIds);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    };

    useEffect(() => {
        fetchFavorites();
    }, [favoriteCars]);

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(filterParams).toString();
        fetch(`http://127.0.0.1:8000/cars/?${queryParams}&search=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                setCars(data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, [filterParams, searchQuery]);

    const handleFilterChange = (e) => {
        setFilterParams({ ...filterParams, [e.target.name]: e.target.value });
    };

    const handleLikeClick = async (carId) => {
        const isLoggedIn = localStorage.getItem('access_token');
        if (isLoggedIn) {
            const updatedFavorites = new Set(favoriteCars);
            const url = updatedFavorites.has(carId) ? 'remove_from_favorites' : 'add_to_favorites';
            try {
                const response = await fetch(`http://127.0.0.1:8000/cars/${url}/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    },
                    body: JSON.stringify({ car_id: carId })
                });

                if (!response.ok) {
                    throw new Error('Ошибка при обновлении избранного');
                }
                if (url === 'add_to_favorites') {
                    updatedFavorites.add(carId);
                } else {
                    updatedFavorites.delete(carId);
                }
                setFavoriteCars(updatedFavorites);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        } else {
            navigate('/login');
        }
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.searchAndFilterContainer}>
                <div className={styles.searchForm}>
                    <SearchForm setSearchQuery={setSearchQuery} />
                </div>
                <button className={styles.filterButton} onClick={toggleFilter}>
                    {isFilterVisible ? 'Скрыть фильтры' : 'Показать фильтры'}
                </button>
            </div>
            {isFilterVisible && (
                <FilterForm
                    filterParams={filterParams}
                    setFilterParams={setFilterParams}
                    applyFilter={() => {
                        setFilterParams(filterParams);
                        toggleFilter();
                    }}
                />
            )}
            <h1 className={styles.title}>Список автомобилей</h1>
            <ul className={styles.list}>
                {cars.map(car => (
                    <CarItem
                        key={car.id}
                        car={car}
                        isFavorite={favoriteCars.has(car.id)}
                        onLikeClick={handleLikeClick}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CarListPage;
