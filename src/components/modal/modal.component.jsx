import React from 'react'
import { getSource } from '../../utils/utils.js';

import useStyles from './modal.styles.js'

import IconButton from '../icon-button/icon-button.component';

const Modal = ({ handleClose, open, source }) => {

    const classes = useStyles();
    const { src, type, url } = getSource(source.images.original)

    const handleClickShare = () => {
        navigator.clipboard.writeText(url)
    }

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
                    <div className={classes.info}>
                        <h3>{source.title}</h3>
                        <IconButton handleClick={handleClickShare} message="Copied!"/>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Modal;