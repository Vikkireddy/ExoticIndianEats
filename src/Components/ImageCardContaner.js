import React from 'react';
import styled from 'styled-components';

// Wrapper to hold the image and background color layers
const ImageCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// Styled container for the background color (fill)
const BackgroundFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ fillColor }) => fillColor || '#fff'};  /* Default fill color */
  clip-path: polygon(
    ${({ topLeft }) => topLeft || '0px'} 0, 
    100% 0, 
    100% 100%, 
    0 100%
  );
`;

// Styled container for the image with dynamic cut corners
const ImageCardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  clip-path: polygon(
    ${({ topLeft }) => topLeft || '0px'} 0, 
    calc(100% - ${({ topRight }) => topRight || '0px'}) 0,  
    100% ${({ topRight }) => topRight || '0px'},  
    100% calc(100% - ${({ bottomRight }) => bottomRight || '0px'}),  
    calc(100% - ${({ bottomRight }) => bottomRight || '0px'}) 100%,  
    ${({ bottomLeft }) => bottomLeft || '0px'} 100%,  
    0 calc(100% - ${({ bottomLeft }) => bottomLeft || '0px'}),  
    0 ${({ topLeft }) => topLeft || '0px'}
  );
`;

const ImageCard = ({ image, topLeft, topRight, bottomLeft, bottomRight, fillColor }) => {
    return (
        <ImageCardWrapper>
            {/* Background layer with color */}
            <BackgroundFill
                topLeft={topLeft}
                topRight={topRight}
                bottomLeft={bottomLeft}
                bottomRight={bottomRight}
                fillColor={fillColor}
            />

            {/* Foreground image layer */}
            <ImageCardContainer
                image={image}
                topLeft={topLeft}
                topRight={topRight}
                bottomLeft={bottomLeft}
                bottomRight={bottomRight}
            />
        </ImageCardWrapper>
    );
};

export default ImageCard;
