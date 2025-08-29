import React from 'react';
import { useState, useEffect} from 'react'

const starEmpty = '/icon/i.icon.star.svg';
const starActive = '/icon/i.icon.star.active.svg';

const Star = ({ active, onClick }) => {
    let iconStar = '';
    if (active) {
        iconStar = starActive;
    }else{
        iconStar = starEmpty;
    }
    return (
        <img
            src={iconStar}
            onClick={onClick}
        />
    );
};

const StarSelector = () => {
    
    const [starRate, setStarRate] = useState(4);

    const handleStarClick = (index) => {
        setStarRate(index + 1);
    };

    const star = [];
        for(let i = 0; i < 5; i++){
            star.push(
                <Star
                    key={i}
                    active={i < starRate}
                    onClick={() => handleStarClick(i)}
                />
            )
        }
        return (
            <div className="star-container">
                {star}
            </div>
        )
};

export default StarSelector;