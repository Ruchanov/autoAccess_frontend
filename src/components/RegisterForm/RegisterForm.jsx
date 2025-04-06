import React from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm = ({ onRegister, onToggle, username, setUsername, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation }) => {
    return (
        <form className={styles.loginForm} onSubmit={onRegister}>
            <h2 className={styles.loginTitle}>Register</h2>
            <div className={styles.inputGroup}>
                <label htmlFor="register-username">Username</label>
                <input
                    type="text"
                    id="register-username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="register-email">Email</label>
                <input
                    type="email"
                    id="register-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="register-password">Password</label>
                <input
                    type="password"
                    id="register-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="register-password-confirm">Confirm password</label>
                <input
                    type="password"
                    id="register-password-confirm"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className={styles.loginButton}>Register</button>
            <p className={styles.toggleForm}>
                Already registered? <button type="button" onClick={onToggle}>Login</button>
            </p>
        </form>
    );
};


export default RegisterForm;

