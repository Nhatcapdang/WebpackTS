import './style.scss'
import Image from './asset/1.png'
import LogoSvg from './asset/react.svg'
import { Counter } from './Counter'

export const App = () => {
  return (
    <div>
      <h1>
        {process.env.NODE_ENV} and {process.env.name}
      </h1>
      <img src={Image} alt="" />
      <img src={LogoSvg} alt="" />
      Nhat cap dang
      <Counter />
    </div>
  )
}
