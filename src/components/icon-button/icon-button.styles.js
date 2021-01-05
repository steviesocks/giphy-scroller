import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    buttonContent: {
        height: '30px',
        width: '68px',
        color: 'white',
        fontWeight: 'bold',
        font: '400 13.3333px Arial',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '5px',
        padding: '1px 6px',
        textAlign: 'center'
    },
    'buttonAnimation': {
        backgroundColor: 'unset',
        border: 'unset',
        height: '30px',
        width: '80px',
        position: 'relative',
        top: '-30px',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,.05)'
        },
        '&:focus': {
            animation: `$click .5s ease`,
            outline: 'unset'
        },
        transition: 'background-color .15s ease'
    },
    buttonAltText: {
        width: '100%',
    },
    icon: {
        height: '20px'
    },
    '@keyframes click': {
        '0%': {
            border: '1px solid rgba(255,255,255,1)',
        },
        '100%': {
            border: '1px solid rgba(255,255,255,0)',
        },
    }
})

export default useStyles;