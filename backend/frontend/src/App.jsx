import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Hiw from './Pages/Hiw'
import Predict  from './Pages/Predict'
import Profile from './Pages/Profile'
import Temp from './Pages/temp'
import STM from './Pages/STM'
import Register from './Pages/Register'
import Error from './Pages/error'
import './App.css'
import PrivateRoute from './utils/PrivateRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './Pages/LoginPage'
import Hospitals from './Pages/Hospitals'


export default function App() {

  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        
            <Route exact path='/' element={<Home/>} />
            <Route path='/Hiw' element={<Hiw/>} />
            <Route path='/Predict' element={<Predict/>}/>
            <Route path='/STM' element={<STM/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/hospitals' element={<Hospitals/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/temp' element={<Temp/>}/>
            <Route path='*' element={<Error/>}/>
        
      </Routes>
      <Footer/> 
    </AuthProvider>
    </>
  )
}
