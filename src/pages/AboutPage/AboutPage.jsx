import React from 'react';
import styles from './AboutPage.module.css';
import NavBar from "../../components/NavBar/NavBar";

const AboutPage = () => {
    return (
        <div className={styles.aboutContainer}>
            <NavBar></NavBar>
            <h1>About Auto Access</h1>
            <p>Welcome to AutoAccess - Your Ultimate Destination for Everything Cars!

                At AutoAccess, we understand the passion and excitement that comes with finding the perfect car. Whether you're in search of a reliable daily driver, a powerful sports car, or a family-friendly SUV, our platform is designed to cater to every automotive need.

                Explore a Vast Inventory:
                Discover an extensive collection of vehicles from leading brands. Our user-friendly interface allows you to browse through various makes and models, refining your search based on preferences such as price range, year, and more.

                Detailed Listings:
                Each car listing on AutoHub comes with comprehensive details, including specifications, mileage, and high-quality images. Make informed decisions with transparent information about each vehicle's history and condition.

                Sell Your Car with Ease:
                Looking to sell your car? AutoHub provides a hassle-free platform for sellers. Create a listing, showcase your vehicle's features, and connect with potential buyers effortlessly.

                Connect with the Community:
                Join a vibrant community of car enthusiasts, where you can share experiences, ask for advice, and stay updated on the latest automotive trends. Our forums and discussion boards provide a space for enthusiasts to connect and share their love for cars.

                Stay Informed:
                Keep yourself informed with the latest news, reviews, and trends in the automotive industry. From expert reviews to insightful articles, AutoHub is your go-to source for staying updated on everything related to cars.

                Secure Transactions:
                At AutoHub, we prioritize the safety and security of our users. Whether you're buying or selling, our platform ensures secure transactions and reliable communication between parties.

                Join us at AutoAccess and embark on a journey where your automotive dreams come to life. Find, sell, and connect with like-minded individuals who share your passion for cars. AutoHub - Where Every Drive Begins!

            </p>
            {/* Добавьте другие сведения о компании здесь */}
        </div>
    );
};

export default AboutPage;