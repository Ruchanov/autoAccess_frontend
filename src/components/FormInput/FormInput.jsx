import React from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ label, type, name, value, onChange, required }) => {
    return (
        <label className={styles.label}>
            {label}:
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={styles.input}
            />
        </label>
    );
};

export default FormInput;
