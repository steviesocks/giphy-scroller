import React, { useRef, useReducer } from 'react';

import shareIcon from '../../assets/shareIcon-white.svg';

import useStyles from './icon-button.styles';

const IconButton = ({ message, handleClick }) => {

    const ref = useRef()
    const classes = useStyles();

    const INITIAL_STATE = {
        message,
        useMessage: message.length ? true : false,
        showMessage: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'COPIED':
                return {
                    ...state,
                    showMessage: true
                };
            case 'RESET':
                return {
                    ...state,
                    showMessage: false
                }
            default: 
                return state
        }
    } 

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    const handleClickAndBlur = () => {
        ref.current.blur()
        handleClick()
        if (state.useMessage) {
            dispatch({type: 'COPIED'})
            setTimeout(() => {
                dispatch({type: 'RESET'})
            }, 2500);
        }
    }

    return (
        <div>

            {
                !state.showMessage ?
                    <div className={classes.buttonContent}>
                        <img src={shareIcon} alt="" className={classes.icon} />
                        <span>Share</span>
                    </div>
                    :
                    <div className={classes.buttonContent}>
                        <span className={classes.buttonAltText}>{message}</span>
                    </div>
                    
            }
            <button className={classes.buttonAnimation} onClick={handleClickAndBlur} ref={ref}/>
        </div>
    )
};

export default IconButton;