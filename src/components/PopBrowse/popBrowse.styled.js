import styled from "styled-components";
import { Hover01, Hover03 } from "../../glogalStyle.styled";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
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
`;
 
export const PopBrowseBlock = styled.div`
     display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
`;

export const PopBrowseContent = styled.div`
display: block;
text-align: left;
opacity: 1;
display: block;

@media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;

    display: none;
  }
`;

export const PopBrowseTopBlock = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseTtl = styled.h3`
color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const BrowseCategoriesTheme = styled.div`
    display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  display: block;
  background-color: #FFE4C2;
  color: #FF6D00;
  opacity: 1 !important;
`;

export const BrowseOrange = styled.p`
    background-color: #FFE4C2;
    color: #FF6D00;
`;

export const PopBrowseStatus = styled.div`
    margin-bottom: 11px;
`;

export const BrowseStatusP = styled.div`
    margin-bottom: 14px;
    color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const BrowseStatusThemes = styled.div`
    display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const BrowseStatusThemeHide = styled.div`
     border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  display: none; //_hide

  p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}
`;

export const BrowseStatusThemeGray = styled.div`
     border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  background: #94A6BE;
  color: #FFFFFF;

  p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}
`;

export const PopBrowseWrap = styled.div`
   display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
    max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
      max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

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
  color: #94A6BE;
  letter-spacing: -0.14px;
}

@media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
}
`;

export const ThemeDownCategories = styled.div`
    display: none;
    margin-bottom: 20px;

@media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
}
`;

export const BrowseCategoriesP = styled.p`
    margin-bottom: 14px;

    color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesTheme = styled.div`
    display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;

  background-color: #FFE4C2;
  color: #FF6D00;

  opacity: 1 !important;
`;

export const PopBrowseBtnBrowse = styled.div`
    display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;

  button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}

@media screen and (max-width: 495px) {
    button {
    width: 100%;
    height: 40px;
  }
}
`;

export const BtnGroup = styled.div`
     width: 100%;

button {
  margin-right: 8px;
}

@media screen and (max-width: 495px) {
    width: 100%;

    button {
    margin-right: 0px;
  }
}
`;

export const PopBrowseBtnEditBtnBor = styled.button`
    display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;

  button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}

    border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;

  a {
  color: #565EEF;
}

  ${Hover03}

  @media screen and (max-width: 495px) {   
    button {
    width: 100%;
    height: 40px;
    }
}
`;

export const BtnBrowseDeleteBtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;

  a {
  color: #565EEF;
}

${Hover03}
`;

export const BtnBrowseCloseBtnBg = styled.button`
    border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;

  a {
  color: #FFFFFF;
}

${Hover01}
`;

export const PopBrowseBntEditHide = styled.div`
    display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  display: none;

  button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}

@media screen and (max-width: 495px) {
    width: 100%;
    margin-right: 0px;

    button {
    width: 100%;
    height: 40px;
  }

}
`;

export const BtnEditEditBtnBg = styled.div`
 display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

    button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}

border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;

  a {
  color: #FFFFFF;
}

${Hover01}
@media screen and (max-width: 495px) {
    width: 100%;

    button {
        width: 100%;
        height: 40px;
        margin-right: 0px;
  }
}
`;