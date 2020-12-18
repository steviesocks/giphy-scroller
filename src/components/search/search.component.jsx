import React from 'react';
import useStyles from './search.styles';

const Search = ({ handleChange, defaultValue, handleSearch }) => {

    const classes = useStyles()

    return (
        <div className={classes.search}>
            <input className={classes.input} type="search" defaultValue={defaultValue} onChange={handleChange}>

            </input>
            <button onClick={handleSearch}>
                go
            </button>
        </div>

    )
};

export default Search