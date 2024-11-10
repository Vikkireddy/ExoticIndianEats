import React from "react";
import styled from "styled-components";

const StyledText = styled.text`
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize}px;
    font-style: ${(props) => props.fontStyle};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
`;

const TextComponent = ({handleSubmit, color, fontFamily, fontSize, fontStyle, fontWeight, lineHeight, title}) => {
    return (
        <div>
            <StyledText
                onClick={handleSubmit}
                color={color}
                fontFamily={fontFamily}
                fontSize={fontSize}
                fontStyle={fontStyle}
                fontWeight={fontWeight}
                lineHeight={lineHeight}
            >
                {title}
            </StyledText>
        </div>
    );
};

export default TextComponent;
