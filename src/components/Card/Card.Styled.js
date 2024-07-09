import styled, { keyframes } from "styled-components";
import { themeColor } from "../../glogalStyle.styled";

const cardAnimation = keyframes`
     0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.cardBg};;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px; 

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
    margin-top: 10px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  color: ${({ theme }) => theme.text};
  ${({ $color }) => themeColor($color)}

  /* p {
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ theme }) => theme.text};
  ${({ $color }) => themeColor($color)}
} */
`;

export const CardBtn = styled.div`
 width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;
export const CardBtnDiv = styled(CardBtn)`
   width: 4px;
   height: 4px;
   border-radius: 50%;
   background-color: #94a6be;
 `;

export const CardContent = styled.div`
 height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
 
export const CardTitle = styled.h3`
font-family: Roboto;
 font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;

  ${({ $color }) => themeColor($color)}
`;

export const CardDate = styled.div`
   position: relative;
   width: 59px;
   height: 13px;
   gap: 6px;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: flex-end;
   padding: 0px;
   color: rgb(148, 166, 190);
   font-family: Roboto;
   font-size: 10px;
   font-weight: 400;
   line-height: 12px;
   text-align: left;
  text-transform: uppercase; 

  svg {
  width: 13px;
  margin-right: 6px;

  /* p {
  font-size: 10px;
  line-height: 11px;
  color: #94A6BE;
  letter-spacing: 1%;
  margin: 0;
} */
}
`;