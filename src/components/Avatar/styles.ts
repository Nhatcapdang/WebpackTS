import { makeStyles } from '@mui/styles'
import { Props } from './index'

export const useStyles = makeStyles({
  circleAvatar: (props: Props) => ({
    position: 'relative',
    width: props.width,
    height: props.height,
    borderRadius: '50%',
    background: `linear-gradient(#00ccff, #d400d4)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    animation: '$rorateText 10s linear infinite',
    '& span': {
      position: 'absolute',
      left: '50%',
      fontSize: '1.2em',
      transformOrigin: '0 100px',
    },
  },
  logo: (props: Props) => ({
    position: 'absolute',
    width: '150px',
    height: '150px',
    backgroundSize: 'cover',
    borderRadius: '50%',
    backgroundImage: `url(
            ${props.image}
          )`,
  }),
  '@keyframes rorateText': {
    '0%': {
      transform: 'rotate(360deg)',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
})
