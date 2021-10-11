import { useStyles } from './styles'

export interface Props {
  text: string
  rotate: number
  height: number
  width: number
  image: string
  children?: React.ReactNode
}

const Avatar = (props: Props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.circleAvatar}>
      <div className={classes.logo}></div>
      <div className={classes.text}>
        {props.text.split('').map((letter, index) => (
          <span
            key={index}
            style={{ transform: `rotate(${index * props.rotate}deg)` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Avatar
