import React from 'react';
import {
    ImageDotContainer, 
    ButtonDot, 
    ButtonDotActive,
}from './image-dots.style';


const Dot = ({active=false, onClick}) => {
    if(active) return <ButtonDotActive ></ButtonDotActive>;
    return <ButtonDot onClick={onClick}></ButtonDot>
}

const ImageDots = ({activeDot, dotClick}) => {
    return (
        <ImageDotContainer>
            {Array(6)
            .fill('')
            .map((item, key) => (
                <Dot 
                key={key} 
                active={key === activeDot}
                onClick={() => dotClick(key)}
                />
            ))}
        </ImageDotContainer>
    )
}

export default ImageDots;
