import styled from 'styled-components';

export const ImageDotContainer = styled.div`
    gap: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 30px;
`;
export const ButtonDot = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #DBDBDB;
    margin: 0 5px;
    cursor: pointer;
`;
export const ButtonDotActive = styled(ButtonDot)`
    background-color: #75D4DA;
`;