import React, { useState} from 'react';
import styles from './LoginPage.module.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const history = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);
                const decoded = jwtDecode(data.access);
                localStorage.setItem('user_id', decoded.user_id);
                setIsLogin(true);// Устанавливаем статус входа в систему
                history('/cars');
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            alert('Passwords do not match!');
            return;
        }

        fetch('http://127.0.0.1:8000/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password, password2: passwordConfirmation }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setIsLogin(true); // Переключение обратно на форму входа после регистрации
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });
    };
    return (
        <div className={styles.loginContainer}>
            <NavBar setIsLoggedIn={setIsLogin} />
            {isLogin ? (
                <LoginForm
                    onLogin={handleLogin}
                    onToggle={() => setIsLogin(false)}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
            ) : (
                <RegisterForm
                    onRegister={handleRegister}
                    onToggle={() => setIsLogin(true)}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    passwordConfirmation={passwordConfirmation}
                    setPasswordConfirmation={setPasswordConfirmation}
                />
            )}
        </div>
    );
};

export default LoginPage;
