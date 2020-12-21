import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    color: 'white'
  },
  galleryWrapper: {
      fontWeight: 'bold',
      width: 'fit-content',
      margin: '0 auto'
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px',
    gridGap: '20px',
  },
  title: {
    textAlign: 'left',
    margin: '30px 0'
  }
})

export default useStyles;