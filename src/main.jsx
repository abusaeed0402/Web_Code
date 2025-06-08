
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App';
import Home from './pages/Home/Home';
import Pricing from './pages/Home/Pricing';
import Services from './pages/Home/Services';
import Blogs from './pages/blogs.jsx/Blogs';
import ErrorPage from './Components/ErrorPage';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      {/*main layout*/}
      <Route element={<App/>}>
      <Route path='/'element={<Home/>}/>
      <Route path='/pricing'element={<Pricing/>}/>
      <Route path='/services'element={<Services/>}/>
      <Route path='/blog'element={<Blogs/>}/>;
        {/* error page */}
         <Route path='*' errorElement={<ErrorPage/> } />;
        
      </Route>
      
      {/* authentication 
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />*/}

      </Routes>
  </BrowserRouter>
)
