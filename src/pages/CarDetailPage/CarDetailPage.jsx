import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CarDetailPage.module.css';
import NavBar from "../../components/NavBar/NavBar";
import CreditCalculator from "../../components/CreditCalculator/CreditCalculator";

const CarDetailPage = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/cars/${id}/`)
            .then(response => response.json())
            .then(data => setCar(data))
            .catch(error => console.error('Error fetching car details:', error));
    }, [id]);

    if (!car) return <div className={styles.loading}>Loading...</div>;

    return (
        <div className={styles.container}>
            <NavBar></NavBar>
            <h1 className={styles.title}>{car.marka} {car.model}</h1>
            <div className={styles.detailsWrapper}>
                <div className={styles.details}>
                    <img src={car.image} alt={`${car.marka} ${car.model}`} className={styles.carImage} />
                    <p><strong>Year:</strong> {car.year}</p>
                    <p><strong>Price:</strong> {car.price}тг</p>
                    <p><strong>Mileage:</strong> {car.mileage} km</p>
                    <p><strong>Body Type:</strong> {car.body_type}</p>
                    <p><strong>Transmission:</strong> {car.transmission}</p>
                    <p><strong>Description:</strong> {car.description}</p>
                    <p><strong>Phone Number:</strong> {car.phoneNumber}</p>
                    <CreditCalculator defaultPrice={car.price} />
                </div>

            </div>
        </div>
    );
};

export default CarDetailPage;
