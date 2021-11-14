import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../App/hooks'
import {
  createPost,
  getPostsRequest,
  updatePost,
} from '../../ReducerGlobal/posts'

const Post = () => {
  const posts = useAppSelector(state => state.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPostsRequest())
    console.log('render')
  }, [dispatch])

  console.log('posts', posts)

  return (
    <div>
      <button
        style={{ marginTop: '200px' }}
        onClick={() =>
          dispatch(
            createPost({
              author: 'kiet',
              content: 'noting',
              likeCount: 99,
              title: 'haha',
            })
          )
        }
      >
        create post
      </button>
      <button
        style={{ marginTop: '200px' }}
        onClick={() =>
          dispatch(
            updatePost({
              _id: '6174fe102a937c3bd010bf1b',
              author: 'update2',
              content: 'update',
              likeCount: 99,
              title: 'haha',
            })
          )
        }
      >
        update post
      </button>
    </div>
  )
}
export default Post
