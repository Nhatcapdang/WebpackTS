import './style.scss'
import Sidebar from './Sidebar'
import { Provider } from 'react-redux'
import store from './App/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ROUTER } from './const'
import Topics from './components/Other'

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Sidebar>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path={ROUTER.TINDER}>
              <About />
            </Route>
            <Route path={ROUTER.I_LOVE_YOU}>
              <About />
            </Route>
            <Route path={ROUTER.ORTHER}>
              <Topics />
            </Route>
            <Route
              // component={NotFound}
              render={() => <Redirect to="/" />}
            />
          </Switch>
        </Sidebar>
      </Router>
    </Provider>
  )
}
function Home() {
  return <h2 style={{ backgroundColor: 'red' }}>Home</h2>
}

function About() {
  return <div>About</div>
}

// function NotFound() {
//   return <h2 style={{ backgroundColor: 'pink' }}>Not found</h2>
// }
