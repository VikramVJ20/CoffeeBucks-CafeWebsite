import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Service from './Components/Services/Service';
import Banner from './Components/Banner/Banner';
import AppStore from './Components/AppStore/AppStore';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';


const App = () => {

  useEffect(()=>{
    Aos.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
    )
    }
  );

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Service/>
      <Banner/>
      <AppStore/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App