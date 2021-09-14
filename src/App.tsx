import './style.scss'
import Sidebar from './Sidebar'
import Navigation from './Navigation'

export const App = () => {
  return (
    <Sidebar>
      <Navigation />
    </Sidebar>
  )
}
