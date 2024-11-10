import React, {useState} from "react";
import Button from "../Components/Button";
import logo from "../Assets/logo.svg";
import biryani from "../Assets/Biryani.svg";
import hamburger from "../Assets/hamburger.svg";
import './Home.css';


const Home = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <div className="hero">
                <header className="header">
                    <div className="hamburger-logo">
                        <div className="hamburger-icon" onClick={toggleNav}>
                            <img src={hamburger} alt="Test" />
                        </div>
                        <div>
                        <img src={logo} alt="Test" className="logo" />
                        </div>
                    </div>
                    <div className={`nav-bar ${isNavOpen ? 'open' : ''}`}>
                        <p href="#">Home</p>
                        <p href="#">Our Menu</p>
                        <p href="#">Gallery</p>
                        <p href="#">About Us</p>
                        <p href="#">Contact</p>
                    </div>
                </header>
                <div className="content">
                    <div className="biryani-image">
                        <img src={biryani} alt="Test" className="biryani" />
                    </div>
                    <div className="home-page-text">
                        <p className="welcome-text">Welcome to Exotic Indian Eats</p>
                        <p className="tag-text">The Authentic <br/>South Indian Food</p>
                        <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                        <Button title="KNOW MORE" backgroundColor='#A26100' color='#FFF' width={210} height={60} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
