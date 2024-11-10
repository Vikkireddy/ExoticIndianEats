// Footer.js
import React from 'react';
import styled from 'styled-components';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  padding: 40px 20px;
  color: #ffffff;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Column = styled.div`
  margin-bottom: 20px;
  text-align: left;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    width: 45%;
  }
`;

const FooterTitle = styled.h3`
  margin-bottom: 10px;
    color: #FFF;
    font-family: Poppins,serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px; /* 141.667% */
  border-bottom: 2px solid #e7c200;
  display: inline-block;
  padding-bottom: 5px;
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  
  a {
    color: #ffffff;
    font-size: 20px;
    transition: color 0.3s ease;

    &:hover {
      color: #e7c200;
    }
  }
`;

const FooterText = styled.p`
  margin: 5px 0;
  line-height: 1.6;
    color: #A1A1A1;
    font-family: Poppins,serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`;
const FooterTextDesc = styled.p`
  margin-top: 10%;
  line-height: 1.6;
    color: #A1A1A1;
    font-family: Poppins,serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    
`;

const Copyright = styled.div`
  text-align: center;
  border-top: 1px solid #333;
  padding: 10px 0;
  font-size: 14px;
  color: #777;
  margin-top: 20px;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                {/* Left Column */}
                <Column>
                    <FooterTextDesc>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br />
                        Sed ut perspiciatis unde omnis iste</FooterTextDesc>
                    <SocialIcons>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> FB</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube </a>
                    </SocialIcons>
                </Column>

                {/* Right Column */}
                <Column>
                    <FooterTitle>Find Us</FooterTitle>
                    <FooterText>Manikonda, Hyderabad,<br />
                        Telangana, India, 500089</FooterText>
                    <FooterText>+91 9515889944</FooterText>
                    <FooterText>design@chasvi.com</FooterText>
                </Column>
            </FooterContent>

            <Copyright>
                © Copyright Chasvi Co 2024, All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
