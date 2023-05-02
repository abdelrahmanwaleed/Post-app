import { useParams, Link, useNavigate } from "react-router-dom"
import { useStoreState, useStoreActions } from 'easy-peasy'


const PostPage = () => {
    
    const {id} =useParams()
    const Navigate = useNavigate()
    const deletePost = useStoreActions((actions) => actions.deletePost)
    const getPostByID = useStoreState((state) => state.getPostByID)
    const post = getPostByID(id)

    const handleDelete = async (id) => {
      deletePost(id)    
      Navigate('/')
      }
    

    return (
      <main className="PostPage">
            <article className="post">
                {post&&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
                        <button className="deleteButton" onClick={()=> handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post not Found</h2>
                        <p>Sorry for that.</p>
                        <p>
                            <Link to='/'>Return Homepage</Link>
                        </p>
                    </>
                }
            </article>
          <h1>
              PostPage
          </h1>
      </main>
    )
  }
  
  export default PostPage