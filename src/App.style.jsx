import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    background-color: #75D4DA;
    padding: 100px 72px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ProductCard = styled.div`
    display: flex;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
export const ProductCardLeft = styled.div`
    position: relative;
    width: 648px;
    background-color: #fff;
`;
export const ProductIdTag = styled.div`
    width: 95px;
    position: relative;
    top: 40px;
    left: 30px;
    border-radius: 10px;
    border: 1px solid #DBDBDB;
    color: #DBDBDB;
    padding: 12px 20px;
    text-align: center;
`;
export const ProductImage = styled.div`
    max-width: 100%;

    img{
        width: 100%;
        padding: 110px 0;
    }
`;
export const ProductCardRight = styled.div`
    width: 548px;
    background-color: #2D2E32;
    color: #fff;
    padding: 30px 50px;
`;
export const ProductInfo = styled.div`
    margin-bottom: 20px;
`;
export const ProductCategory = styled.div`
    color: #75D4DA;
    font-size: 16px;
    font-weight: 700;
`;
export const ProductName = styled.h1`
    font-size: 48px;
    font-weight: 600;
    margin: 10px 0 0 0;
`;
export const ProductBrand = styled.p`
    color: #777777;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    margin: 0 0 20px 0;
`;
export const ProductSales = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const ProductPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const Dollar = styled.div`
    width: 20px;
    height: 39px;
    background-image: url('/icon/i.icon.dollar.svg');
    background-size: contain;
    background-repeat: no-repeat;
`;
export const Price = styled.span`
    color: #F0F0F0;
    font-size: 48px;
    font-weight: 700;
    display: flex;
    align-items: center; 
`;
export const ProductOptions = styled.span`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
`;
export const GroupButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const Button = styled.button`
    background-color: transparent;
    border-radius: 50px;
    font-weight: 500;
    font-size: 24px;
    padding: 10px 0;
    cursor: pointer;
`;
export const ButtonTop = styled(Button)`
    border: 1px solid #ffffff;
    color: #ffffff;
`;
export const ButtonDown = styled(Button)`
    background-color: #75D4DA;
`;
