  import styled from "styled-components";
  import { Hover03 } from "../../glogalStyle.styled";

  export const PopExit  = styled.div`
  width: 100%;
      height: 100%;
      min-width: 375px;
      min-height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 7;
    `;

  export const PopExitContainer  = styled.div`
  width: 100%;
      height: 100%;
      min-height: 100vh;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.4);
  `;

  export const PopExitBlock  = styled.div`
  display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  `;

  export const PopExitTtl  = styled.h2`
  text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  `;

  export const PopExitFormGroup  = styled.div`
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  export const PopExitYesButton = styled.button`
  width: 153px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
    margin-right: 10px;
    &:hover {
      background-color: #33399b;
    }
  `;

  export const PopExitYesA  = styled.a`
  width: 100%;
    height: 100%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  export const PopExitNoButton = styled.button`
  width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
    
    ${Hover03}

    a {
    width: 100%;
    height: 100%;
    color: #565EEF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none; // Убирает подчеркивание у ссылки
  }

  a:hover {
    color: #ffffff;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
  `;

  // export const PopExitNoA  = styled.a`
  // width: 100%;
  // height: 100%;
  // color: #565EEF;
  // display: flex;
  // align-items: center;
  //   justify-content: center;
  // &:hover{
  //     color: #ffffff};
  // `;

  export const PopExitForm  = styled.form`
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;