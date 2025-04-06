import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import CarListPage from "./pages/CarListPage/CarListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CarDetailPage from "./pages/CarDetailPage/CarDetailPage";
import CarCreatingPage from "./pages/CarCreatingPage/CarCreatingPage";
import LikesPage from "./pages/LikesPage/LikesPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AboutPage from "./pages/AboutPage/AboutPage";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/cars" element={<CarListPage />} />
                    <Route path="/cars/:id" element={<CarDetailPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/createCar" element={<CarCreatingPage />} />
                    <Route path="/likes" element={<LikesPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
