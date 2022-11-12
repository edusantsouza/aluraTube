import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: #fff;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button[type="submit"] {
    width: 200px;
    padding: 10px 10px;
    display: inline-block;
    border: none;
    border-radius: 2px;
    margin: 0;
    text-decoration: none;
    background: red;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 550;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  button:hover{
    opacity:.8;
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    z-index: 100;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    & > div {
      
      flex: 1;
      border-radius: 5px;
      max-height: 200px;
      max-width: 300px; 
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      align-items:center ;
      gap: 10px;
      position: relative;
      padding: 16px;
      padding-top: 40px;
      left: 50% ;
      transform: translateX(-50%);
    }
  }
  input{
width: 200px;
height: 30px;
border: none;
border-radius: 2px;
outline: none;
padding: 10px 6px;
background-color: ${({theme})=> theme.backgroundLevel1 };
color: ${({theme})=> theme.textColorBase};
font-size: 12px;
}
`;