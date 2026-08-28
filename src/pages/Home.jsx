import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Accommodation from "../components/Accommodation";
import Location from "../components/Location";
import Gallery from "../components/Gallery";
import RoomTypes from "../components/RoomTypes";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyChooseUs";
import Activities from "../components/JoyfulActivities";

const Home = () => {
  return (
    <div className="website">
      <Navbar />

      <main>
        <Hero />
        <Accommodation />
       
        <Activities />
        <Gallery />
        
        <WhyUs/>

         <Location />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Home;