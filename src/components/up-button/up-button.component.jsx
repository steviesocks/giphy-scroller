import React, { useState, useEffect } from 'react';

import arrowIcon from '../../assets/arrowIcon.svg';
import useStyles from './up-button.styles';

const ArrowButton = () => {

    const [style, setStyle] = useState({})

    const classes = useStyles();

    const handleScroll = (event) => {
        console.log(event)
        if (event.path[1].scrollY < 500) {
            setStyle({display: 'none'})
            return;
        }
        setStyle({})
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <button className={classes.button} style={style}>
           <img className={classes.img} src={arrowIcon} alt="" /> 
        </button>
    )
};

export default ArrowButton;