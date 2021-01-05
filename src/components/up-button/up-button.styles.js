import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    button: {
        position: 'fixed',
        top: '87vh',
        height: '55px',
        width: '55px',
        right: '40px',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: 'unset',
        border: 'unset',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255, .1)'
        },
        '&:focus': {
            outline: 'unset'
        },
        transition: 'all .2s ease'
    },
    img: {
        height: '20px'

    }
});

export default useStyles;