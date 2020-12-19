import React from 'react'
import { getSource } from '../../utils/utils.js';

import useStyles from './modal.styles.js'

const Modal = ({ handleClose, open, source }) => {

    const classes = useStyles();
    const { src, type } = getSource(source.images.original)

    return (
        <div id="modal" className={classes.modal} onClick={handleClose} style={open ? null : { display: 'none' }}>
            <div className={classes.background}>
                <div className={classes.grid}>
                    {
                        type === "mp4" ?
                            <video autoPlay loop muted inline>
                                <source src={src} type="video/mp4" />
                            </video>
                            :
                            <img src={src} alt="whoops" />
                    }
                    <h2>{source.title}</h2>
                </div>
            </div>
        </div>
    )
};

export default Modal;