import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    user: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    avatar: {
        height: '40px',
        marginRight: '10px'
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center'
    },
    displayName: {
        margin: '0 0 4px 0',
    },
    username: {
        margin: '0 10px 0 0',
        cursor: 'pointer',
        opacity: .7,
        '&:hover': {
            opacity: 1
        },
        transition: 'all .15s ease'
    },
    icon: {
        height: '13px'
    }
});

export default useStyles;