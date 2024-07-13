import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*:before,
*:after {
  box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}
`;

export const Loader = styled.p`
  text-align: center;
  margin-top: 20px;
  background: url('/images/loader.gif') no-repeat center center;
  background-size: 50px 50px; 
  height: 100px;
  line-height: 100px; 
  font-size: 1.5rem; 
  color: #333;
`;

export const Wrapper = styled.div`
 max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;

export const Container = styled.div`
max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const themeColor = ($color) => css`
  ${$color === "Web Design" && css`
  background-color: ${({ theme }) => theme.colors.orangeBg};
    color: ${({ theme }) => theme.colors.orangeText};
`}
  ${$color === "Copywriting" && css`
  background-color: ${({ theme }) => theme.colors.purpleBg};
    color: ${({ theme }) => theme.colors.purpleText};
`}
  ${$color === "Research" && css`
   background-color: ${({ theme }) => theme.colors.greenBg};
    color: ${({ theme }) => theme.colors.greenText};
`}
  ${!$color && css`
  background-color: ${({ theme }) => theme.colors.grayBg};
    color: ${({ theme }) => theme.colors.grayText};
`}
`;

export const Hover01 = css`
  &:hover {
  background-color: #33399b;
}
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;

  &:after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
}
`; 

export const Hover03 = css`
&:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
`;

export const ContainerSignin = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;

export const Subttl = css`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemes = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Orange = css`
    background-color: #FFE4C2;
    color: #FF6D00;
`;

export const Green = css`
    background-color: #B4FDD1;
    color: #06B16E;
`;

export const Purple = css`
    background-color: #E9D4FF;
    color: #9A48F1;
`;

export const Gray = css`
    background: #94A6BE;
    color: #FFFFFF;
`;