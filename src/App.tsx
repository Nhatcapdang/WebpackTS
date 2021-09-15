import './style.scss'
import Sidebar from './Sidebar'
import Navigation from './Navigation'
import { Provider } from 'react-redux'
import store from './App/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Sidebar>
        <Navigation />
      </Sidebar>
    </Provider>
  )
}
