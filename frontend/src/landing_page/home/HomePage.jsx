import Stats from "./Stats";
import Awards from "./Awards";
import Hero from "./Hero";
import Pricing from "./pricing";
import Education from "./Education";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function HomePage() {
  return (
   <div>
      
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
     
        </div>
  )
     
}

export default HomePage;