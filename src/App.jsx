
import { Outlet } from 'react-router';
import Navbar from './Components/Navbar';
import Footer from './Components/footer/Footer';
function App() {


  return (
    <>
      <Navbar/>
      <main className='min-h-screen'>
      <Outlet/>
      </main>
     <Footer/>
    </>
  )
}

export default App
