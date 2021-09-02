import './style.scss';
import Image from './asset/1.png';
import LogoSvg from './asset/react.svg';

export const App = () => {
  return (
    <div>
      <img src={Image} alt="" />
      <img src={LogoSvg} alt="" />
      Nhat cap dang
    </div>
  );
};
