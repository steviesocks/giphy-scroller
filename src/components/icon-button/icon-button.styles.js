import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    button: {
        height: '30px',
        width: '80px',
        backgroundColor: 'unset',
        border: 'unset',
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '5px',
        '&:focus': {
            outline: 'unset'
        },
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
        }
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