import styled from "styled-components";
import { Hover01 } from "../../glogalStyle.styled.js";

export const RegisterWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.body};
`;

export const ContainerSignup = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;

export const ModalReg = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.body};

    @media screen and (max-width: 375px) {        
        background-color: ${({ theme }) => theme.body};    
    }
`;

export const ModalBlockReg = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.cardBg};
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid ${({ theme }) => theme.colors.categoryBorder};
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

    @media screen and (max-width: 375px) {        
            max-width: 368px;
            width: 100%;
            padding: 0 16px;
            border-radius: none;
            border: none;
            box-shadow: none;        
    }
`;

export const ModalTitleReg = styled.div`
    h2 {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.6px;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.text};
    }
`;

export const ModalFormLoginReg = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const ModalInputReg = styled.input`
    width: 100%;
    min-width: 100%;
    border-radius: 8px;
    border: 0.7px solid ${({ theme }) => theme.colors.categoryBorder};
    outline: none;
    padding: 10px 8px;
    background-color: ${({ theme }) => theme.popupBg};

    &::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: ${({ theme }) => theme.textSecondary};

    &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: ${({ theme }) => theme.textSecondary};
  }
  }
`;

export const ModalBtnSignupEnt = styled.button`
    width: 100%;
    height: 30px;
    background-color: #565EEF;;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: ${({ theme }) => theme.colors.purpleText};

    a {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.purpleText};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${Hover01}

  @media screen and (max-width: 375px) {    
      height: 40px; 
 }
`;

export const ModarFormGroupReg = styled.div`
        text-align: center;

        p, a {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;
