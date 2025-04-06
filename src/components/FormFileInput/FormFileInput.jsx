import React from 'react';
import styles from './FormFileInput.module.css';

const FormFileInput = ({ label, name, onChange, accept }) => {
    return (
        <label className={styles.label}>
            {label}:
            <input
                type="file"
                name={name}
                onChange={onChange}
                accept={accept}
                className={styles.fileInput}
            />
        </label>
    );
};

export default FormFileInput;
