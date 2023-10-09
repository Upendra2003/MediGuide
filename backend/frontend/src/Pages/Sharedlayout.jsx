import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
      <Footer/>
    </>
  )
}
export default Home