import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Hiw from './pages/Hiw'
import Predict from './pages/Predict'
import Profile from './pages/Profile'
import STM from './pages/STM'
import Register from './pages/Register'
import Login from './pages/Login'
import Error from './pages/error'
import './App.css'
import PrivateRoute from './utils/PrivateRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage'

export default function App() {

  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        
            <Route exact path='/' element={<PrivateRoute  Component={Home}/>} />
            <Route path='/Hiw' element={<PrivateRoute Component={Hiw}/>} />
            <Route path='/Predict' element={<PrivateRoute Component={Predict}/>}/>
            <Route path='/STM' element={<PrivateRoute Component={STM}/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<Error/>}/>
        
      </Routes>
      <Footer/>
    </AuthProvider>
    </>
  )
}
