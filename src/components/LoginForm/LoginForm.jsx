import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin, onToggle, username, setUsername, password, setPassword }) => {
    return (
        <form className={styles.loginForm} onSubmit={onLogin}>
            <h2 className={styles.loginTitle}>LOGIN</h2>
            <div className={styles.inputGroup}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className={styles.loginButton}>Login</button>
            <p className={styles.toggleForm}>
                Not registered yet?    <button type="button" onClick={onToggle}>Register</button>
            </p>
        </form>
    );
};

export default LoginForm;
