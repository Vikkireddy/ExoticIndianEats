import React from 'react';
import styled from 'styled-components';
import Phoneicon from '../../Assets/Phoneicon.svg';
import TextComponent from "../../Components/Text";

const ContactUs = () => {
    return (
        <Container>
            <ContactInfo>
                <TextWrapper>
                <TextComponent
                    title="Reach Us"
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
                    title="Get In Touch With Us"
                    color="#000"
                    fontFamily="Poppins"
                    fontSize={36}
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                />
                </TextWrapperSub>
                <Description>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Description>
                <ContactItem>
                    <IconWrapper src={Phoneicon}></IconWrapper>
                    <ContactDetails>
                        <strong>+91 9515 889 944</strong>
                        <small>Telephone</small>
                    </ContactDetails>
                </ContactItem>
                <ContactItem>
                    <IconWrapper src={Phoneicon}></IconWrapper>
                    <ContactDetails>
                        <strong>hello@exoticindiaeats.com</strong>
                        <small>Email</small>
                    </ContactDetails>
                </ContactItem>
                <ContactItem>
                    <IconWrapper src={Phoneicon}></IconWrapper>
                    <ContactDetails>
                        <strong>Braga St 28, Bandung, West Java</strong>
                        <small>Location</small>
                    </ContactDetails>
                </ContactItem>
            </ContactInfo>
            <ContactForm>
                <FormTitle>Contact Form</FormTitle>
                <form>
                    <Input type="text" placeholder="Name" required />
                    <Input type="email" placeholder="Email" required />
                    <FormRow>
                        <Input type="text" placeholder="Phone Number" required />
                        <Input type="text" placeholder="Subject" required />
                    </FormRow>
                    <Textarea placeholder="Message..." required />
                    <SubmitButton type="submit">SUBMIT</SubmitButton>
                </form>
            </ContactForm>
        </Container>
    );
};

export default ContactUs;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
  background-color: #f4f4f4;
  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 45%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextWrapper = styled.div`
 margin-top: 15%;
    margin-bottom: 3%;
    text-align: left;
`;

const TextWrapperSub = styled.div`
  margin-bottom: 8%;
    text-align: left;
`;

const ContactForm = styled.div`
  flex: 1;
  background-color: #000;
  padding: 20px;
  max-width: 45%;
    margin-top: 5%;
    margin-bottom: 5%;
  color: #fff;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const Description = styled.p`
    color: #808080;
    font-family: Poppins,serif;
    text-align: left;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    margin-bottom: 5%;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;
`;

const IconWrapper = styled.div`
  background-color: #9c6d34;
  color: white;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 20px;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    color: #333;
  }
  small {
    color: #777;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  //border-radius: 5px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
    width: 90%;
    margin-left: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  box-sizing: border-box;
  height: 100px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  background-color: #9c6d34;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 40%;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #774b24;
  }
`;
