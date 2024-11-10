import React from "react";
import styled from "styled-components";
import TextComponent from "./Text";

// Styled container with cut corners
const CardContainer = styled.div`
    background-color: ${({backgroundColor})=>backgroundColor};
    clip-path: polygon(
            ${({ topLeft }) => topLeft || '0px'} 0,                            /* Top-left corner */
            calc(100% - ${({ topRight }) => topRight || '0px'}) 0,            /* Apply top-right cut */
            100% ${({ topRight }) => topRight || '0px'},                      /* Move to top-right */
            100% calc(100% - ${({ bottomRight }) => bottomRight || '0px'}),   /* Move down the right edge */
            calc(100% - ${({ bottomRight }) => bottomRight || '0px'}) 100%,   /* Bottom-right cut */
            ${({ bottomLeft }) => bottomLeft || '0px'} 100%,                  /* Bottom-left cut */
            0 calc(100% - ${({ bottomLeft }) => bottomLeft || '0px'}),        /* Move along the left edge */
            0 ${({ topLeft }) => topLeft || '0px'}                            /* Back to top-left */
    );
    display: flex;
`;

// Styled content inside the card
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    text-align: left;
    padding-top: 12%;
    padding-right: 20%;
    padding-bottom: 10%;
`;

const StyledImage = styled.img`
    margin:0;
    padding-left: 8%;
    padding-top: 8%;
    padding-right: 5%;
  width: 10%;
  height: 10%;
`;

const Card = ({icon, topLeft, topRight, bottomLeft, bottomRight, title, description, backgroundColor}) => {
    return (
        <CardContainer
            topLeft={topLeft}
            topRight={topRight}
            bottomLeft={bottomLeft}
            bottomRight={bottomRight}
            backgroundColor={backgroundColor}
        >
            <StyledImage src={icon} alt="Test" />
            <CardContent>
                <TextWrapper>
                    <TextComponent
                        title={title}
                        color="#A26100"
                        fontFamily="Poppins"
                        fontSize={22}
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="normal"
                    />
                    <TextComponent
                        title={description}
                        color="#808080"
                        fontFamily="Poppins"
                        fontSize={14}
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="26px"
                    />
                </TextWrapper>
            </CardContent>
        </CardContainer>
    );
};

export default Card;
