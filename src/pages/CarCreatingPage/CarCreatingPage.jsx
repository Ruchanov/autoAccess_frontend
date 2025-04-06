import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import CarForm from "../../components/CarForm/CarForm";
import styles from './CarCreatingPage.module.css';
import NavBar from "../../components/NavBar/NavBar";


const CarCreatingPage = () => {
    const [formData, setFormData] =     useState({
        marka: '',
        model: '',
        year: null,
        price: null,
        mileage: null,
        body_type: '',
        transmission: '',
        description: '',
        image: null,
        phoneNumber: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            if (key !== 'image' && formData[key] !== null) {
                data.append(key, formData[key]);
            }
        }
        const userId = parseInt(localStorage.getItem('user_id'), 10);
        console.log('User ID:', userId, 'Type:', typeof userId);
        data.append('user', userId);

        if (formData.image instanceof File) {
            data.append('image', formData.image);
        }
        for (let [key, value] of data.entries()) {
            console.log(key, value);
        }
        fetch('http://127.0.0.1:8000/cars/create/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: data,
        })
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) });
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div className={styles.carCreatingContainer}>
            <NavBar></NavBar>
            <h1>Create Car Post</h1>
            <CarForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        </div>
    );
};

export default CarCreatingPage;