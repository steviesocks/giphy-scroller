import React from 'react';

import useStyles from './gif-card.styles';

const GifCard = ({src, id}) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <video className={classes.video} autoPlay loop muted inline>
                <source src={src} type="video/mp4" />
            </video>
        </div>
)}

export default GifCard;