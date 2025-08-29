import React from 'react';

const pictureColor = [
    {
        order: 0,
        colorName: 'c1',
    },
    {
        order: 1,
        colorName: 'c2',
    },
    {
        order: 2,
        colorName: 'c3',
    },
    {
        order: 3,
        colorName: 'c4',
    },
    {
        order: 4,
        colorName: 'c5',
    },
    {
        order: 5,
        colorName: 'c6',
    },
]
const ColorSelector = ({ onColorSelect, activeColor }) => {

    return (
        <div className="color-selector">
            <span className="option-label">COLOR</span>
            <div className="color">
                {pictureColor.map((color) => {
                    let className = `color-circle ${color.colorName}`;

                    if (activeColor === color.order) {
                        className = className + ' active';
                    }

                    return(
                        <span
                            key = {color.order}
                            className = {className}
                            onClick = {() => {
                                onColorSelect(color.order);
                            }}
                        ></span> 
                    );
                })}
            </div>
        </div>
    );
};

export default ColorSelector;