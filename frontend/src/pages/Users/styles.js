import styled from "styled-components";
import Background from "../../assets/backgroung2.svg";

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%; 
    min-height: 100vh;
    padding:20px;

    
`;

export const Image = styled.img`    
    width: 220px;
    margin: 20px auto -10px auto;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 300px;
    height: 58px; 
    border: none;
    outline: none;
    margin-top: 28px;
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;