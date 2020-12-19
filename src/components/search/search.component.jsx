import React from 'react';
import useStyles from './search.styles';

import icon from '../../assets/searchIcon.svg';

const Search = ({ handleChange, placeholder, handleSearch, handleEnterKey }) => {

    const classes = useStyles()

    return (
        <div className={classes.search}>
            <input className={classes.input} 
                type="search" 
                placeholder={placeholder} 
                onChange={handleChange} 
                onKeyPress={handleEnterKey}
                />
            <button className={classes.button} onClick={handleSearch}>
                <img src={icon} alt="go" height="30px" />
            </button>
        </div>

    )
};

export default Search