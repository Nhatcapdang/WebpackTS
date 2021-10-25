import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  createPost,
  updatePost,
  createPostSuccess,
  getPostsFailure,
  getPostsRequest,
  getPostsSuccess,
  updatePostSuccess,
} from '../ReducerGlobal/posts'
import axios from 'axios'
import { IPosts, IResponse } from '../interface'

const URL = 'the-first-server.herokuapp.com'

export const fetchPosts = () => axios.get(`${URL}/posts`)
export const createPostServer = (payload: IPosts) =>
  axios.post(`${URL}/posts`, payload)
export const updatePostServer = (payload: IPosts) =>
  axios.post(`${URL}/posts/update`, payload)

function* hellosaga() {
  console.log('hello saga')
}
function* doFetchPostsSaga() {
  try {
    const posts: IResponse<IPosts[]> = yield call(fetchPosts)
    yield put(getPostsSuccess(posts.data))
  } catch (err) {
    console.error('Dang', err)
    yield put(getPostsFailure)
  }
}

function* doCreatePostsSaga(action: ReturnType<typeof createPost>) {
  try {
    const respon: IResponse<IPosts> = yield call(
      createPostServer,
      action.payload
    )
    console.log('createPostServer', respon.data)
    yield put(createPostSuccess(respon.data))
  } catch (err) {
    console.error(err)
    yield put(getPostsFailure)
  }
}

function* doUpdatePostSaga(action: ReturnType<typeof updatePost>) {
  try {
    const updatedPost: IResponse<IPosts> = yield call(
      updatePostServer,
      action.payload
    )
    console.log('updatedPost', updatedPost)
    yield put(updatePostSuccess(updatedPost.data))
  } catch (err) {
    console.error(err)
    yield put(getPostsFailure)
  }
}

function* watchPost() {
  yield takeLatest(getPostsRequest().type, doFetchPostsSaga)
  yield takeLatest(createPost, doCreatePostsSaga)
  yield takeLatest(updatePost, doUpdatePostSaga)
}

export default function* rootSaga() {
  yield all([hellosaga(), watchPost()])
}
