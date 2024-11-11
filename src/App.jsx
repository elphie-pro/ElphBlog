import './App.css'
import { Route,  createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import Mainlayout from './layouts/Mainlayout'
import Createpage from './pages/Createpage'
import Dashboard from './pages/Dashboard'
import Blogposts from './pages/Blogposts'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route index element= {<Loginpage />} />
        <Route path='/create' element={<Createpage />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/posts' element={<Blogposts/>}/>
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
