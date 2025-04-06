import React from 'react';
import styles from './SearchForm.module.css'

const SearchForm = ({ setSearchQuery }) => {
    return (
        <div className={styles.searchForm}>
            <input type="text" placeholder="Поиск" onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    );
};

export default SearchForm;
