// src/ProductDetails.jsx
import React, { useState } from 'react';

const tabData = [
    {
        name: 'DESCRIPTION', 
        content: 'Lorem ipsum dolor sit amet co grhwh wrghio  gbfsbsf sfgbs tgbs fdkm qersgbur adipisicing eli wrguhhw eriguhe erughiwhg nsdbfs gbfsbsf sfgbs tgbs fdkm qersgbur adipisicing elit.'
    },
    {
        name: 'DETAILS', 
        content: ' dolor sit amet co grhwh wrghio  gbfsbsf sfgbs tgbs fdkm qersgbur adipisicing eli wrguhhw eriguhe erughiwhg Lorem ipsum nsdbfs gbfsbsf sfgbs tgbs fdkm qersgbur adipisici.'
    },
    {
        name: 'COMMENTS', 
        content: ' co grhwh wrghio Lorem ipsum dolor sit gbfsbsf sfgbs tgbs fdkm qersgbur adipisicing eli amet wrguhhw eriguhe erughiwhg nsdbfs gbfsbsf sfgbs tgbs fdkm qersgbur adipisicing elit.'
    },
];

const ProductDetails = () => {
    const [tabActive, setTabActive] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const fullContent = tabData[tabActive].content;

    // 內容顯示
    let displayedContent = "";
    if (expanded) {
        //true 顯示全部內容
        displayedContent = fullContent;
    } else {
        //false 顯示部分內容
        displayedContent = fullContent.substring(0, 120) + '...';
    }

    // 按鈕文字
    let buttonText = "";
    if (expanded) {
        buttonText = 'read less';
    } else {
        buttonText = 'read more';
    }

    // read more 狀態切換
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="product-tab-details">
            <div className="tab-items">
                {tabData.map((tab, index) => {
                    let className = 'tab-name';
                    if (index === tabActive) {
                        className += ' tab-active';
                    }
                    return(
                        <span
                            key={index}
                            className={className}
                            onClick={() => {
                                setTabActive(index);
                                setExpanded(false);
                            }}
                        >{tab.name}</span> 
                    );
                })}
            </div>

            <p className="tab-text">
                {displayedContent}
            </p>

            <span className="read-more" onClick={toggleExpand}>
                {buttonText}
            </span>
        </div>
    );
};

export default ProductDetails;