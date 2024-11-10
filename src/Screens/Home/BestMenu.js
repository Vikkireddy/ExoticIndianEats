import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComboOffersMenu from "../../Assets/ComboOffersMenu.svg";
import ComboOffersMenu2 from "../../Assets/ComboOffersMenu2.svg";
import verticallines from "../../Assets/verticallines.svg";
import TextComponent from "../../Components/Text";

const ComboOffers = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const packages = [
        {
            title: 'Appetizer Package',
            image: ComboOffersMenu,
            description: [],
            price: ''
        },
        {
            title: 'Main Course Package',
            image: ComboOffersMenu,
            description: ['Paneer Butter Masala', 'Chicken 65 Biryani', 'Kaju Chicken Curry'],
            price: '$120 / person'
        },
        {
            title: 'Dessert Package',
            image: ComboOffersMenu2,
            description: [],
            price: ''
        },
    ];

    useEffect(() => {
        const cardWrapper = document.getElementById('cardWrapper');
        const handleScroll = () => {
            const scrollPosition = cardWrapper.scrollLeft;
            const cardWidth = cardWrapper.offsetWidth;
            const newIndex = Math.round(scrollPosition / cardWidth);
            setActiveIndex(newIndex);
        };

        cardWrapper.addEventListener('scroll', handleScroll);

        return () => {
            cardWrapper.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container>
            <Title>
                <TextComponent
                    title="Combo Offers"
                    color="#A26100"
                    fontFamily="Dancing Script, cursive"
                    fontSize={36}
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                />
            </Title>
            <Heading>Best Recommendation Menu</Heading>
            <CardWrapper id="cardWrapper">
                <CardContainer>
                    {packages.map((pkg, index) => (
                        <Card key={index} image={pkg.image}>
                            <CardContent>
                                <CardTitle>{pkg.title}</CardTitle>
                                {pkg.description.length > 0 && (
                                    <CardDescription>
                                        {pkg.description.map((item, idx) => (
                                            <p key={idx}>{item}</p>
                                        ))}
                                    </CardDescription>
                                )}
                                {pkg.price && (
                                    <Price>
                                        {pkg.price.split(' ')[0]} <span>{pkg.price.split(' ').slice(1).join(' ')}</span>
                                    </Price>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </CardContainer>
            </CardWrapper>
            <DotsContainer>
                {packages.map((_, index) => (
                    <Dot key={index} active={activeIndex === index} />
                ))}
            </DotsContainer>
        </Container>
    );
};

export default ComboOffers;

const Title = styled.div`
    margin-top: 3%;
    margin-bottom: 1%;

    @media (max-width: 768px) {
        margin-top: 20%; /* Remove margin-left for mobile screens */
        font-size: 28px;
    }
`;

const Container = styled.div`
    text-align: center;
    padding-top: 3%;
    padding-bottom: 5%;
    font-family: Arial, sans-serif;
    margin-left: 0; /* Ensure no margin for verticallines */
    margin-right: 3%;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
        height: 150px;
        background-image: url(${verticallines});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 0;
        margin: 0; /* No margin for verticallines */
    }
`;

const Heading = styled.h2`
    color: #000;
    font-family: Poppins, serif;
    margin-bottom: 5%;
    font-size: 36px;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 768px) {
        margin-top: 2%; /* Remove margin-left for mobile screens */
        font-size: 28px;
    }
`;

const CardWrapper = styled.div`
    @media (max-width: 768px) {
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        margin-left: 15%;
        margin-right: 15%;
        clip-path: polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0% 100%);
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-left: 3%; /* Apply margin-left to the cards only */

    @media (max-width: 768px) {
        display: flex;
        gap: 0;
        width: max-content;
        margin-left: 0; /* Remove margin-left for mobile screens */
    }
`;

const Card = styled.div`
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 30%;
    height: 500px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    color: white;
    z-index: 1;
    clip-path: polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0% 100%);

    @media (max-width: 768px) {
        width: 100vw;
        height: 400px;
        scroll-snap-align: start;
    }
`;

const CardContent = styled.div`
    position: relative;
    z-index: 2;
    background-color: #ffffff;
    width: 100%;
    margin-right: 5%;
    clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0% 100%);

    @media (max-width: 768px) {
        clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0% 100%);
        width: 60%;
    }
`;

const CardTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 15px;
    text-align: left;
    margin-left: 5%;
    margin-top: 5%;
    color: #000;

    &::before {
        content: '';
        display: inline-block;
        text-align: left;
        width: 40px;
        height: 2px;
        background-color: #A26100;
        margin-right: 4px;
        margin-bottom: 4px;
        border-radius: 2px;
    }
    
`;

const CardDescription = styled.div`
    color: #4E4F51;
    font-family: Poppins, serif;
    font-size: 13px;
    text-align: left;
    margin-left: 5%;
    margin-bottom: 5%;

    p {
        margin-bottom: 10px;
    }

    p:last-child {
        margin-bottom: 0;
    }
`;

const Price = styled.p`
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    color: #A26100;
    margin-left: 5%;
    margin-bottom: 5%;

    span {
        color: #959595;
        font-size: 12px;
    }
`;

const DotsContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${props => (props.active ? '#A26100' : '#ccc')};
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
`;
