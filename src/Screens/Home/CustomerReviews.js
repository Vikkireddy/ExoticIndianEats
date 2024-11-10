// TestimonialSlider.js
import React, { useState } from 'react';
import styled from 'styled-components';
import TextComponent from "../../Components/Text";
import Testimonials from '../../Assets/Testimonials.svg';

const testimonials = [
    {
        id: 1,
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        author: "Jonathan Xander"
    },
    {
        id: 2,
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        author: "Emily Clarke"
    },
    {
        id: 3,
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
        author: "Michael Brown"
    }
];

const CustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <Container>
            <TextWrapper>
            <TextComponent
                title="Testimonials"
                color="#A26100"
                fontFamily="Dancing Script, cursive"
                fontSize={36}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
            />
            </TextWrapper>
            <TextWrapperSub>
            <TextComponent
                title="Customer Reviews"
                color="#000"
                fontFamily="Poppins"
                fontSize={36}
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
            />
            </TextWrapperSub>
            <Content>
                <Arrow onClick={handlePrevClick}>&lt;</Arrow>
                <Review>
                    <QuoteText>{testimonials[currentIndex].text}</QuoteText>
                    <Image src ={Testimonials} alt={"Test"} />
                    <Author>{testimonials[currentIndex].author}</Author>
                </Review>
                <Arrow onClick={handleNextClick}>&gt;</Arrow>
            </Content>
        </Container>
    );
};

export default CustomerReviews;


// Styled components for the testimonial slider
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    //padding: 20px 10px;
  }
`;

const TextWrapper = styled.div`
 margin-top: 3%;  
`;

const TextWrapperSub = styled.div`
  margin-bottom: 3%;
`;

const Image = styled.img`
  margin-top: 3%;
    margin-bottom: 5%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 768px) {

  }
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #9c6d34;
  user-select: none;
    margin-left: 5%;
    margin-right:5%;
    margin-bottom: 10%;
  transition: 0.3s;
  &:hover {
    color: #774b24;
  }
`;

const Review = styled.div`
  max-width: 600px;
  padding: 20px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const QuoteText = styled.p`
    color: #000;
    text-align: center;
    font-family: Poppins,serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 130% */
    margin-bottom: 5%;
`;

const Author = styled.h4`
  font-weight: bold;
  color: #333;
  margin: 0;
`;
