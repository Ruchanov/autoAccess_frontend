import React from 'react';
import styles from './FormTextArea.module.css';

const FormTextArea = ({ label, name, value, onChange, required }) => {
    return (
        <label className={styles.label}>
            {label}:
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={styles.textArea}
            />
        </label>
    );
};

export default FormTextArea;
