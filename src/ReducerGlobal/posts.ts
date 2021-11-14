import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'
import { IPosts, IRreduer } from '../interface'

const initialState: IRreduer<IPosts[]> = {
  isLoading: false,
  data: [],
}
export const posts = createSlice({
  name: 'GET_POST',
  initialState,
  reducers: {
    getPostsRequest: state => {
      return {
        ...state,
        isLoading: true,
      }
    },
    getPostsSuccess: (state, action: PayloadAction<IPosts[]>) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        status: 'success',
      }
    },
    getPostsFailure: state => {
      return {
        ...state,
        isLoading: false,
        status: 'falied',
      }
    },
    createPostSuccess: (state, action: PayloadAction<IPosts>) => {
      return {
        ...state,
        data: [...state.data, action.payload],
        status: 'success',
      }
    },
    updatePostSuccess: (state, action: PayloadAction<IPosts>) => {
      return {
        ...state,
        data: state.data.map(post =>
          post._id === action.payload._id ? action.payload : post
        ),
        status: 'success',
      }
    },
  },
})
export const createPost = createAction<IPosts>('create/post')
export const updatePost = createAction<IPosts>('update/post')

export const {
  getPostsRequest,
  getPostsSuccess,
  getPostsFailure,
  createPostSuccess,
  updatePostSuccess,
} = posts.actions
export default posts
