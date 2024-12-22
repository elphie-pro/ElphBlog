import './App.css'
import { Route,  createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import Mainlayout from './layouts/Mainlayout'
import Createpage from './pages/Createpage'
import Dashboard from './pages/Dashboard'
import Blogposts from './pages/Blogposts'
import Addpost from './pages/Addpost'
import Post from './pages/Post'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route index element= {<Loginpage />} />
        <Route path='/create' element={<Createpage />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/posts' element={<Blogposts/>}/>
        <Route path='/add-post' element={<Addpost/>}/>
        <Route path='/posts/:id' element= {<Post/>}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
