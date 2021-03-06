import './styles/index.scss'
import Sidebar from './components/Sidebar'
import { Provider } from 'react-redux'
import './i18next'
import store from './App/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ROUTER } from './const'
import { lazy, Suspense, useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Hero from './components/Hero'
import ErrorFallback from './components/ErrorFallback'
import SlashSreen from './components/SlashSreen'
import { useTranslation } from 'react-i18next'
import { getKey } from './utils'
import Post from './components/Posts'

const Topics = lazy(() => import('./components/Other'))
const Bitstamp = lazy(() => import('./components/Bitstamp'))
const ChatApp = lazy(() => import('./components/ChatApp'))
const CardEffects = lazy(() => import('./components/CardEffects'))

export const App = () => {
  const [isSlashScreen, setisSlashScreen] = useState(true)
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(getKey<string>('Lang'))
    setTimeout(() => setisSlashScreen(false), 1000)
  }, [i18n])

  return isSlashScreen ? (
    <SlashSreen />
  ) : (
    <Provider store={store}>
      <Router>
        <Sidebar>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              // reset the state of your app so the error doesn't happen again
            }}
          >
            <Suspense fallback={<SlashSreen />}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path={ROUTER.BITS_TAMP} component={Bitstamp} />
                <Route path={ROUTER.CHATAPP} component={ChatApp} />
                <Route path={ROUTER.CARD_EFFECTS} component={CardEffects} />
                <Route path={ROUTER.TINDER} component={Post} />
                <Route path={ROUTER.OVERVIEW} component={About} />
                <Route path={ROUTER.ORTHER} component={Topics} />
                <Route
                  // component={NotFound}
                  render={() => <Redirect to="/" />}
                />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </Sidebar>
      </Router>
    </Provider>
  )
}
function Home() {
  return <h2 style={{ backgroundColor: 'red' }}>Home</h2>
}

function About() {
  return (
    <div>
      <Hero heroName="dang" />
      <Hero heroName="nhat" />
    </div>
  )
}
