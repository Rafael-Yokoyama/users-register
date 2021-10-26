import styled from "styled-components";
import Background from "../../assets/background1.svg";


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh; 
    min-height: 100vh;
    padding:20px;
`;

export const Image = styled.img`
    width: 250px;
    margin: 30px auto; 
`;

export const Input_label = styled.p`
    letter-spacing: -0.408px;
    color: #EEEEEE;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 1px;
    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 300px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 34px;
`;