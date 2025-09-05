import { useState, useEffect} from 'react'
import {
    QuantityAndPrice,
    Quantity,
    QuantitText,
    IconMinus,
    MinusIcon,
    NumberBox,
    IconAdd,
    AddIcon,
    TotalPrice,
    PriceText,
    PriceContainerDown,
    PriceContainerDownImage,
    PriceDown,
}from'./quantity-selector.style';

const defaultPrice = 420;

const QuantitySelector = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const handleCliclAdd = () => {
        setCount((current) => current + 1)
    };

    const handleCliclMinus = () => {
        setCount((current) => current - 1)
    };
    useEffect(() => {
        setTotal(count * defaultPrice);
    },[count]);

    return (
        <QuantityAndPrice>    
            <Quantity>
                <QuantitText>QUANTITY</QuantitText>

                <IconMinus onClick={handleCliclMinus}>
                    <MinusIcon/>
                </IconMinus>

                <NumberBox>{count}</NumberBox>

                <IconAdd onClick={handleCliclAdd}>
                    <AddIcon/>
                </IconAdd>
            </Quantity>

            <TotalPrice>
                <PriceText>TOTAL PRICE</PriceText>
                <PriceContainerDown>
                    <PriceContainerDownImage/>
                    <PriceDown>{total}</PriceDown>
                </PriceContainerDown>
            </TotalPrice>
        </QuantityAndPrice>
    );
};

export default QuantitySelector;
