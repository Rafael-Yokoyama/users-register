import styled from "styled-components";

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin: 30px 0;
`;

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 40px);
    ${props => props.is_blur && `
        backdrop-filter: blur(45px);
    
    `}
`;

export const Button = styled.button`
    background: ${props => props.is_back ? 'transparent' : 'rgba(0, 0, 0, 0.8)' } ;
    border-radius: 14px;
    margin: 22px auto;
    width: 300px;
    height: 54px;
    border: ${props =>props.is_back ? '1px solid #ffffff' : 'none' };
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    &:hover {
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
    img{
        transform: ${props => props.is_back && 'rotateY(180deg)'};
    }
`