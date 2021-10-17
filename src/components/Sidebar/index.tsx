import { scaleDown as Menu, State } from 'react-burger-menu'
import { useTranslation } from 'react-i18next'
import {
  FaDragon,
  FaPaperPlane,
  FaHeart,
  FaSeedling,
  FaStaylinked,
  FaKorvue,
  FaFirstdraft,
  FaGgCircle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../App/hooks'
import { ROUTER } from '../../const'
import { onOpen } from '../../ReducerGlobal/openSideBar'
import DarkMode from '../DarkMode'
import './styles.scss'
import Navigation from '../Navigation'

const TITLE_SIDEBAR = [
  {
    icon: <FaHeart />,
    title: 'Bitstamp',
    href: ROUTER.BITS_TAMP,
  },
  {
    icon: <FaDragon />,
    title: 'Overview',
    href: ROUTER.OVERVIEW,
  },
  {
    icon: <FaSeedling />,
    title: ' Card Effects',
    href: ROUTER.CARD_EFFECTS,
  },
  {
    icon: <FaStaylinked />,
    title: 'Settings',
    href: ROUTER.SETTINGS,
  },
  {
    icon: <FaKorvue />,
    title: 'Chat App',
    href: ROUTER.CHATAPP,
  },
  {
    icon: <FaFirstdraft />,
    title: 'Specical',
    href: ROUTER.SPECICAL,
  },
  {
    icon: <FaGgCircle />,
    title: 'Tinder',
    href: ROUTER.TINDER,
  },
  {
    icon: <FaGgCircle />,
    title: 'Orther',
    href: ROUTER.ORTHER,
  },
]

export default function Sidebar(props: { children?: React.ReactNode }) {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.openSideBar.isOpen)
  const { t } = useTranslation()

  const isMenuOpen = function (state: State) {
    dispatch(onOpen(state.isOpen))
  }

  return (
    <div id="outer-container-sidebar">
      <Menu
        pageWrapId={'page-wrap-sidebar'}
        outerContainerId={'outer-container-sidebar'}
        customCrossIcon={false}
        customBurgerIcon={false}
        onStateChange={isMenuOpen}
        isOpen={isOpen}
      >
        <a href={ROUTER.HOME}>{t('Nhat Cap Dang')}</a>

        {TITLE_SIDEBAR.map((val, index) => (
          <Link to={val.href} key={index}>
            {val.icon}
            {t(val.title)}
          </Link>
        ))}
        <div>
          {t('Theme')}
          <DarkMode />
        </div>
        <a href="/a">
          <img
            src="https://images.unsplash.com/photo-1631348676438-cc95021461d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            alt="profileImg"
          />
          <div className="name_job">
            <div className="name">Prem Shahi</div>
            <div className="job">Web designer</div>
          </div>
          <FaPaperPlane />
        </a>
      </Menu>
      <main id="page-wrap-sidebar">
        <Navigation />
        {props.children}
      </main>
    </div>
  )
}
