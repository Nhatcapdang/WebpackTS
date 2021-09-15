import { ReactChild, ReactFragment, ReactPortal } from 'react'
import { scaleDown as Menu, State } from 'react-burger-menu'
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
import { useAppDispatch, useAppSelector } from '../App/hooks'
import { onOpen } from '../ReducerGlobal/openSideBar'
import './styles.scss'

const TITLE_SIDEBAR = [
  {
    icon: <FaHeart />,
    title: 'I love you',
    href: '1',
  },
  {
    icon: <FaDragon />,
    title: 'Overview',
    href: '2',
  },
  {
    icon: <FaSeedling />,
    title: ' Shortcuts',
    href: '3',
  },
  {
    icon: <FaStaylinked />,
    title: 'Settings',
    href: '4',
  },
  {
    icon: <FaKorvue />,
    title: 'Portolio',
    href: '4',
  },
  {
    icon: <FaFirstdraft />,
    title: 'Specical',
    href: '6',
  },
  {
    icon: <FaGgCircle />,
    title: 'Tinder',
    href: '7',
  },
]

export default function Sidebar(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.openSideBar.isOpen)

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
        <a href="/">Nhat Cap Dang</a>

        {TITLE_SIDEBAR.map((val, index) => (
          <a href={val.href} key={index}>
            {val.icon}
            {val.title}
          </a>
        ))}

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
      <main id="page-wrap-sidebar">{props.children}</main>
    </div>
  )
}
