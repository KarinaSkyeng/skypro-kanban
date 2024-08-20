import styled from "styled-components";
import { Hover01 } from "../../glogalStyle.styled";

export const PopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.popupBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #4E5566;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopNewCardForm = styled.form`
  width: 370px;
  //width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.h4`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.text}; // Цвет заголовков в зависимости от темы
  margin-bottom: 10px;
`;

export const FormNewInput = styled.input`
    margin: 20px 0;
    width: 370px;
    outline: none;
    padding: 14px;
    background: ${({ theme }) => theme.cardBg};
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    color: ${({ theme }) => theme.text};

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
}

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: ${({ theme }) => theme.textSecondary};
        letter-spacing: -0.14px;
}
`;

export const FormNewArea = styled.textarea`
  width: 370px;
  margin-top: 14px;
  height: 200px;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.cardBg};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.text};

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1px;
      color: #94a6be;
      letter-spacing: -0.14px;
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;

export const PopNewCardCategories = styled.div`
  margin-bottom: 20px;

  p {
    margin-bottom: 14px;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }
`;

export const CategoriesPSubttl = styled.label`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 14px;
`;

export const InputRadio = styled.input`
  display: none;

  &:checked + label {
    opacity: 100%;
  }
`;

export const RadioToolbarLabel1 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.orangeText};
  background: ${({ theme }) => theme.colors.orangeBg};
  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;

  &:hover {
    opacity: 100%;
    color: ${({ theme }) => theme.colors.orangeBg}; // Меняем текст и фон при наведении
    background: ${({ theme }) => theme.colors.orangeText};
  }
`;

export const RadioToolbarLabel2 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.greenText};
  background: ${({ theme }) => theme.colors.greenBg};
  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;

  &:hover {
    opacity: 100%;
    color: ${({ theme }) => theme.colors.greenBg}; // Меняем текст и фон при наведении
    background: ${({ theme }) => theme.colors.greenText};
  }
`;

export const RadioToolbarLabel3 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.purpleText};
  background: ${({ theme }) => theme.colors.purpleBg};
  cursor: pointer;
  margin-right: 7px;
  opacity: 50%;

  &:hover {
    opacity: 100%;
    color: ${({ theme }) => theme.colors.purpleBg}; // Меняем текст и фон при наведении
    background: ${({ theme }) => theme.colors.purpleText};
  }
`;

export const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color:#565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  ${Hover01}
`;
