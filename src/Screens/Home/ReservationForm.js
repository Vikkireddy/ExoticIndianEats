import React from 'react';
import styled from 'styled-components';
import TextComponent from "../../Components/Text";
import ContactForm from "../../Components/ContactForm";

const Reservation = () => {
    return (
        <ReservationWrapper>
            <ReservationContent>
                <TextComponent
                    title="Reservation"
                    color="#A26100"
                    fontFamily="Dancing Script, cursive"
                    fontSize={36}
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="normal"
                />
                <TextComponent
                    title="Full Happiness By Making a Reservation"
                    color="#000"
                    fontFamily="Poppins, serif"
                    fontSize={36}
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                />
                <TextComponent
                    title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoerror sit voluptatem accusantium doloremque laudantium  ab illo inventore veritatis et quasi"
                    color="#000"
                    fontFamily="Poppins, serif"
                    fontSize={16}
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                />
            </ReservationContent>
            <ContactFormWrapper>
                <ContactForm/>
            </ContactFormWrapper>
        </ReservationWrapper>
    );
};

export default Reservation;


const ReservationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #F2F2F2;
    padding: 5%;

    @media (max-width: 768px) {
       display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

const ReservationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    text-align: left;
    gap: 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ContactFormWrapper = styled.div`
    display: flex;
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
        clip-path: polygon(0 0, calc(100% - 100px) 0, 100% 100px, 100% 100%, 0% 100%);
    }
`;