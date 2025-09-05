import styled from 'styled-components';

export const QuantityAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Quantity = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;
export const QuantitText = styled.p`
    color: #ffffff;
    font-weight: 500;
    font-size: 24px;
    margin: 0px;
    display: flex;
    align-items: center;
`;
export const IconMinus = styled.div`
    cursor: pointer;
`;
export const MinusIcon = styled.div`
    width: 24px;
    height: 24px;
    background-image: url('/icon/i.icon.minus.svg');
    background-size: contain;
    background-repeat: no-repeat;
`;
export const NumberBox = styled.div`
    width: 40px;
    height: 40px;
    background-color: #777777;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    p{
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
    };

`;
export const IconAdd = styled.div`
    cursor: pointer;
`;
export const AddIcon = styled.div`
    width: 24px;
    height: 24px;
    background-image: url('/public/icon/i.icon.add.svg');
    background-size: contain;
    background-repeat: no-repeat;
`;
export const TotalPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
export const PriceText = styled.p`
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
    display: flex;
    align-items: center;
    margin: 0px;
`;
export const PriceContainerDown = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;
export const PriceContainerDownImage = styled.span`
    width: 19px;
    height: 24px;
    background-image: url('/public/icon/i.icon.dollar.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
`;
export const PriceDown = styled.span`
    color: #F0F0F0;
    font-size: 24px;
    font-weight: 700;
`;