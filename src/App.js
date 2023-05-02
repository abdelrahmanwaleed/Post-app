import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import EditPost from './EditPost'
import { Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import useAxiosFetch from './hooks/useAxiosFetch'
import { useStoreActions } from 'easy-peasy'


function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts)
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3000/posts')
  
  useEffect(()=>{
    setPosts(data)
  },[data, setPosts])


  return (
        <Routes>
              <Route  path="/" element={< Home 
              fetchError={fetchError}
              isLoading={isLoading}
              />}>
              <Route path="post">
              <Route index element={< NewPost /> }/>
                </Route>
              <Route path="/edit/:id" element={< EditPost />}/>
              <Route path="/post/:id" element={< PostPage />}/>
              <Route path="about" element={< About/>} />
              <Route path="*" element={< Missing/>} />
            </Route>  
        </Routes>
  );
}

export default App;
