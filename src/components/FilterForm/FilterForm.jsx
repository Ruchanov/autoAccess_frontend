import React from 'react';
import styles from './FilterForm.module.css'

const FilterForm = ({ filterParams, setFilterParams, applyFilter }) => {
    const handleChange = (e) => {
        setFilterParams({ ...filterParams, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.filterForm}>
            <input type="number" name="min_price" placeholder="Мин. цена" onChange={handleChange} />
            <input type="number" name="max_price" placeholder="Макс. цена" onChange={handleChange} />
            <input type="number" name="min_mileage" placeholder="Мин. пробег" onChange={handleChange} />
            <input type="number" name="max_mileage" placeholder="Макс. пробег" onChange={handleChange} />
            <input type="number" name="min_year" placeholder="Мин. год" onChange={handleChange} />
            <input type="number" name="max_year" placeholder="Макс. год" onChange={handleChange} />
            <button onClick={applyFilter}>Фильтровать</button>
        </div>
    );
};

export default FilterForm;
