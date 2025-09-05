import styled from 'styled-components';

export const ColorSelectorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
`;
export const OptionLabel = styled.span`
    font-size: 24px;
    color: #ffffff;
`;
export const Color = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
export const ColorCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    background-color: ${props => props.$colorCode};

    border: 2px solid transparent;
    border-color: ${props => props.$active ? '#75D4DA' : 'transparent'};
`;
