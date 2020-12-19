import { createUseStyles } from "react-jss";    

import closeIcon from '../../assets/closeIcon.svg';

const useStyles = createUseStyles({
  search: {
      margin: '20px',
      display: 'flex',
      justifyContent: 'center'
  },
  input: {
    height: '45px',
    border: 'unset',
    width: '600px',
    fontSize: '1.75em',
    color: '#d923ee',
    fontWeight: 'bold',
    paddingLeft: '10px',
    '&::-webkit-search-cancel-button': {
      '-webkit-appearance': 'none',
      cursor: 'pointer',
      opacity: .7,
      marginRight: '10px',
      height: '20px',
      width: '20px',
      backgroundImage: `url(${closeIcon})`,
      backgroundSize: '20px, 20px',
      '&:hover': {
        opacity: 1
      }
    },
    '&:focus': {
      outline: 'none'
    }
  },
  button: {
    width: '45px',
    border: 'unset',
    cursor: 'pointer',
    background: 'linear-gradient(45deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)',
    backgroundSize: '500% 500%',
    animation: `$rainbow 13s ease infinite`,
    '&:focus': {
      outline: 'none'
    }
  },
  '@keyframes rainbow': {
    '0%': {
      backgroundPosition: '0% 82%'
    },
    '50%': {
      backgroundPosition: '100% 19%'
    },
    '100%': {
      backgroundPosition: '0% 82%'
    }
  }
})

export default useStyles;