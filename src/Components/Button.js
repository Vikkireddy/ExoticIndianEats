import React from "react";
import styled from "styled-components";

const StyledButton= styled.button`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`;

const Button=(props)=>{
    return(
        <div>
            <StyledButton onClick={props.handleSubmit} color={props.color}  backgroundColor={props.backgroundColor}  width={props.width} height={props.height}>{props.title}</StyledButton>
        </div>
    )
}
export default Button;