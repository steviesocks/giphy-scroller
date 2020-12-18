import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
      color: 'white',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center'
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px',
    gridGap: '20px',
  }
})

export default useStyles;