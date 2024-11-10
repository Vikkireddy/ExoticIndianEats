import React from 'react';
import styled from 'styled-components';
import verticallines from "../Assets/verticallines.svg"; // Adjust the image paths as needed

const BookTableForm = () => {
    return (
        <FormContainer>
            <Title>Book Table</Title>
            <Form>
                <Input type="text" placeholder="Name" />
                <FormRow>
                    <Input type="text" placeholder="Phone Number" />
                    <Select>
                        <option>2 Person</option>
                        <option>3 Person</option>
                        <option>4 Person</option>
                    </Select>
                </FormRow>
                <FormRow>
                    <Select>
                        <option>21/07/2024</option>
                        <option>22/07/2024</option>
                        <option>23/07/2024</option>
                    </Select>
                    <Select>
                        <option>19.00 PM</option>
                        <option>20.00 PM</option>
                        <option>21.00 PM</option>
                    </Select>
                </FormRow>
                <ButtonWrapper>
                    <Button>BOOK NOW</Button>
                </ButtonWrapper>
            </Form>
        </FormContainer>
    );
};

export default BookTableForm;

// Styled Components

const FormContainer = styled.div`
    background-color: #1c1c1c;
    padding: 30px;
    width: 500px;
    height: auto;
    position: relative;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%);
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    /* Background lines */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 120px;
        height: 120px;
        background-image: url(${verticallines});
        background-size: contain;
        background-repeat: no-repeat;
        opacity: 0.2;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 120px;
        height: 120px;
        background-image: url(${verticallines});
        background-size: contain;
        background-repeat: no-repeat;
        opacity: 0.2;
        transform: rotate(180deg);
    }

    @media (max-width: 768px) {
        width: 100%;
        clip-path: none;
        padding: 20px;
    }
`;

const Title = styled.h2`
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;
    margin-top: 20px;

    @media (max-width: 768px) {
        margin-top: 40px;
    }
`;

const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #fff;
    background-color: transparent;
    color: white;
    outline: none;
    margin-bottom: 15px;

    &::placeholder {
        color: #aaa;
    }
`;

const Select = styled.select`
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 16px;
    background-color: transparent;
    color: white;
    border: 1px solid #fff;
    outline: none;

    &::placeholder {
        color: #aaa;
    }

    @media (max-width: 768px) {
        width: 100%; /* Make Select full-width on smaller screens */
    }
`;

const FormRow = styled.div`
    display: flex;
    gap: 15px;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: row;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    @media (max-width: 768px) {
        margin-top: 40px;
    }
`;

const Button = styled.button`
    width: 186px;
    height: 50px;
    background-color: #FFF;
    color: #A26100;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #925300;
    }
`;
