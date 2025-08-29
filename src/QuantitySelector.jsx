import { useState, useEffect} from 'react'

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
        <div className="quantity-and-peice">    
            <div className="quantity">
                <p className="quantity-text">QUANTITY</p>

                <div className="icon minus" onClick={handleCliclMinus}>
                    <img src="/public/icon/i.icon.minus.svg" alt="minus"/>
                </div>

                <div className="number-box">
                    <p>{count}</p>
                </div>

                <div className="icon add" onClick={handleCliclAdd}>
                    <img src="/public/icon/i.icon.add.svg" alt="add"/>
                </div>
            </div>

            <div className="total-price">
                <p className="price-text">TOTAL PRICE</p>
                <div className="price-container-down">
                    <img src="/icon/i.icon.dollar.svg" alt="dollar"/>
                    <span className="price-down">{total}</span>
                </div>
            </div>
        </div>
    );
};

export default QuantitySelector;
