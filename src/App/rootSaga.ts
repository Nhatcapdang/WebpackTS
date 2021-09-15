import { all } from 'redux-saga/effects'

function* hellosaga() {
  console.log('hello saga')
}

export default function* rootSaga() {
  yield all([hellosaga()])
}
