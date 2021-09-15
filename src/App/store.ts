import { configureStore } from '@reduxjs/toolkit'
import { openSideBar } from './../ReducerGlobal/openSideBar'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    openSideBar: openSideBar.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
