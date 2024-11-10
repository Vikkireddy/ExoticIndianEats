import React from 'react';
import ImageCard from "../../Components/ImageCardContaner";
import hero from "../../Assets/Hero.png";
import diagonallines from "../../Assets/diagonallines.svg"; // Your diagonal lines image
import './HomeAboutUs.css';

const AboutUs = () => {
    return (
        <div className="home-about-us">
            {/* First ImageCard */}
            <div className="home-about-us-card1" style={{width: '30%', height: '572px'}}>
                <ImageCard
                    image={hero}
                    topLeft="0px"
                    topRight="60px"
                    bottomLeft="0px"
                    bottomRight="0px"
                    fillColor="#F2F2F2"
                />
            </div>

            {/* Second ImageCard */}
            <div className="home-about-us-card2" style={{width: '30%', height: '572px'}}>
                <ImageCard
                    image={hero}
                    topLeft="0px"
                    topRight="0px"
                    bottomLeft="60px"
                    bottomRight="0px"
                    fillColor="#F2F2F2"
                />
            </div>

            {/* Third Card Container with shadow and diagonal background */}
            <div className="home-about-us-card3-wrapper">
                <div className="home-about-us-card3">
                    <div className="about-us-content">
                        <h3>About Us</h3>
                        <h1>Our Story Make History</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium...</p>
                        <a href="#" className="read-more-link">Read More <span>&rarr;</span></a>
                    </div>
                </div>

                {/* Diagonal Lines Image Positioned Behind */}
                <img src={diagonallines} alt="Diagonal Lines" className="diagonal-lines"/>
            </div>
        </div>
    );
};

export default AboutUs;
