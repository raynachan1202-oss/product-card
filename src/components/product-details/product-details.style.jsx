import styled from 'styled-components';

export const ProductTabDetails = styled.div`
    margin-bottom: 20px;
`;
export const TabItems = styled.div`
    display: flex;
    gap: 30px;
    position: relative;

    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #777777;
  }
`;
export const TabName = styled.span`
    padding-bottom: 15px;
    font-size: 24px;
    cursor: pointer;

    border-bottom: 3px solid transparent;
    border-bottom-color: ${props => props.$active ? '#75D4DA' : 'transparent'};;
    z-index: 2;
`;
export const TabText = styled.p`
    font-size: 24px;
    font-weight: 500;
    line-height: 135%;
    
    overflow: hidden;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;

    margin-bottom: 0;
    
`;
export const ReadMore = styled.span`
    font-size: 24px;
    color: #75D4DA;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: end;
`;