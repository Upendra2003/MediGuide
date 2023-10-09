import { Routes,Route } from 'react-router-dom'
import Layout from './pages/Sharedlayout'
import Home from './pages/Home'
import Hiw from './pages/Hiw'
import Predict from './pages/Predict'
import Profile from './pages/Profile'
import STM from './pages/STM'
import Register from './pages/Register'
import Login from './pages/login'
import Error from './pages/error'
import './App.css'

export default function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path='/Hiw' element={<Hiw/>} />
      <Route path='/Predict' element={<Predict/>}/>
      <Route path='/STM' element={<STM/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>

      </Route>

    </Routes>
    </>
  )
}
