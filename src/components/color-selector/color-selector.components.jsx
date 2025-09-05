import React from 'react';
import {
    ColorSelectorContainer,
    OptionLabel,
    Color,
    ColorCircle,
}from './color-selector.style';

const pictureColor = [
    {
        order: 0,
        colorCode: '#EDC71D',
    },
    {
        order: 1,
        colorCode: '#EBE1D6',
    },
    {
        order: 2,
        colorCode: '#C1B8B3',
    },
    {
        order: 3,
        colorCode: '#C32315',
    },
    {
        order: 4,
        colorCode: '#E67229',
    },
    {
        order: 5,
        colorCode: '#5D4843',
    },
]
const ColorSelector = ({ onColorSelect, activeColor }) => {

    return (
        <ColorSelectorContainer>
            <OptionLabel>COLOR</OptionLabel>
            <Color>
                {pictureColor.map((color) => (
                    <ColorCircle
                        key = {color.order}
                        $colorCode = {color.colorCode}
                        $active={activeColor === color.order}
                        onClick = {() => {
                            onColorSelect(color.order);
                        }}
                    ></ColorCircle>     
                ))}
            </Color>
        </ColorSelectorContainer>
    );
};

export default ColorSelector;