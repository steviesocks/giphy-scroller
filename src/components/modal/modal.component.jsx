import React from 'react'
import { getSource } from '../../utils/utils.js';

import useStyles from './modal.styles.js'

import IconButton from '../icon-button/icon-button.component';
import User from '../user/user.component';

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
                        {
                            source.user ?
                                <User user={source.user} />
                                :
                                <div className={classes.nonUser}>
                                    <h5 className={classes.subtitle}>Source</h5>
                                    <h5 className={classes.source}><a target="_blank" rel="noreferrer" href={source.source}>{source.source}</a></h5>
                                </div>

                        }
                        <IconButton handleClick={handleClickShare} message="Copied!" />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Modal;