import './App.css';
import Home from "./Screens/Home";
import Discover from "./Screens/Discover/Discover";
import AboutUs from "./Screens/AboutUs/HomeAboutUs";

import ComboOffers from "./Screens/Home/BestMenu";
import Reservation from "./Screens/Home/ReservationForm";
import Footer from "./Screens/ContactsUs/Footer";
import CustomerReviews from "./Screens/Home/CustomerReviews";
import ContactUs from "./Screens/ContactsUs/ContactUs";
import { Main } from './Core/Main';

function App() {
  return (
    <div className="App">

        {/* <Home />
        <Discover />
        <AboutUs /> */}
        {/*<RecommendedMenu />*/}
        {/* <ComboOffers />
        <Reservation />
        <CustomerReviews />
        <ContactUs />
        <Footer /> */}

        <Main />
    </div>
  );
}

export default App;
