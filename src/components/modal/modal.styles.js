import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    modal: {
        position: 'fixed',
        top: '0',
        zIndex: '1',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(217, 35, 238, .6)',
    },
    background: {
        color: 'white',
        height: '92vh',
        width: '80vw',
        overflowY: 'auto',
        margin: '4vh 10vw',
        borderRadius: '10px',
        backgroundColor: '#282c34',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    grid: {
        margin: '20px',
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gridTemplateRows: '100px 50px 50px 50px 50px',
        gridGap: '20px',
        justifyItems: 'center'
    },
    info: {
        textAlign: 'left',
    }    
});

export default useStyles;