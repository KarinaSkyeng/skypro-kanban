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

  p {
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ theme }) => theme.text};
  ${({ $color }) => themeColor($color)}
}
`;


export const CardBtn = styled.div`
 width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
}
`;

export const CardContent = styled.div`
 height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
 
export const CardTitle = styled.h3`
 font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;

  ${({ $color }) => themeColor($color)}
`;

export const CardDate = styled.div`
 display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
  width: 13px;

  p {
  margin-left: 6px;
  font-size: 10px;
  line-height: 11px;
  color: ${({ theme }) => theme.text};
  ${({ $color }) => themeColor($color)}
  letter-spacing: 1%;
}
}
`;