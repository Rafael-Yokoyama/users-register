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
ul{
    overflow-y:auto;
    height: 250px;
    padding-bottom:15px;
    ::-webkit-scrollbar-thumb:vertical {
        background: #2596be; 
        height:1px !important;
        border-radius: 20px;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;

}

    ::-webkit-scrollbar {
        width:5px; 
        background: #FFFFF0; 
}
}
    
`;

export const Image = styled.img`    
    width: 220px;
    margin: 20px auto -10px auto;
`;

export const User = styled.li`
    display: flex;

    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 300px;
    height: 58px; 
    border: none;
    outline: none;
    margin: 28px 10px;
  
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
        padding:30px;
        display: flex;  
           
      
    }
    p:nth-child(2){
        color:rgba(255, 255, 255, 0.75);
      
      margin : 0 auto;
      
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content:left;
        margin-left:auto;
        padding:20px;
 
    }
`;