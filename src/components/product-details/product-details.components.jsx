// src/ProductDetails.jsx
import React, { useState } from 'react';
import {
    ProductTabDetails,
    TabItems,
    TabName,
    TabText,
    ReadMore,
}from './product-details.style';
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
        <ProductTabDetails>
            <TabItems>
                {tabData.map((tab, index) => (
                    <TabName
                        key={index}
                        $active={index === tabActive}
                        onClick={() => {
                            setTabActive(index);
                            setExpanded(false);
                        }}
                    >
                        {tab.name}
                    </TabName>
                ))}
            </TabItems>

            <TabText>
                {displayedContent}
            </TabText>

            <ReadMore onClick={toggleExpand}>
                {buttonText}
            </ReadMore>
        </ProductTabDetails>
    );
};

export default ProductDetails;