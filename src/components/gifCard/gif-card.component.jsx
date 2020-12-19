import React from 'react';

import useStyles from './gif-card.styles';

const GifCard = ({ source, id, handleClick }) => {
    const classes = useStyles();

    const { type, src } = source;

    return (
        <div className={classes.card} onClick={handleClick}>
            {
                type === "mp4" ?    
                    <video id={id} autoPlay loop muted inline>
                        <source src={src} type="video/mp4" />
                    </video>
                    :
                    <img id={id} src={src} alt="whoops" />
            }
        </div>
)}

export default GifCard;