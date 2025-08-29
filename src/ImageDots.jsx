import React from 'react';

const Dot = ({active=false, onClick}) => {
    if(active) return <span className="dot dot-active"></span>;
    return <span className="dot" onClick={onClick}></span>
}

const ImageDots = ({activeDot, dotClick}) => {
    return (
        <div className="image-dots">
            {Array(6)
            .fill('')
            .map((item, key) => (
                <Dot 
                key={key} 
                active={key === activeDot}
                onClick={() => dotClick(key)}
                />
            ))}
        </div>
    )
}

export default ImageDots;