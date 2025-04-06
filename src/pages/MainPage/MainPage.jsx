import React from 'react';
import './MainPage.css';
import logo2_1 from './logo2_1.png'
import NavBar from "../../components/NavBar/NavBar";
import {useNavigate} from "react-router-dom";
// import NavBar from "../../components/NavBar/NavBar";
const MainPage = () => {
    let navigate = useNavigate();


    function handleClick() {
        navigate('/cars'); // Перенаправление на маршрут /cars
    }
    function handleClick2() {
        navigate('/createCar'); // Перенаправление на маршрут /cars
    }
    return (
        <div className="main-page">
            <NavBar></NavBar>
            <header className="hero">
                <div className="hero-text">
                    <h1>AUTO ACCESS</h1>
                    <p>WORLD OF CARS</p>
                    <p>FIND YOUR DREAM CAR HERE</p>
                    <div className="hero-buttons">
                        <button onClick={handleClick}>Buy a Car</button>
                        <button onClick={handleClick2}>List Your Car</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={logo2_1} alt="Luxury Car"/>
                </div>
            </header>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} AutoAccess. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainPage;
