import styled from "styled-components";
import { themeColor, Hover01, Hover03 } from "../../glogalStyle.styled";

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
  `;

  export const PopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.popupBg};
    color: ${({ theme }) => theme.text};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px ${({ theme }) => theme.categoryBorder};
    position: relative;
  `;

  export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
  `;
  
export const PopBrowseColor = styled.div`
display: inline-block;
padding: 8px 20px 8px 20px;
width: 115px;
height: 30px;
border-radius: 24px;
background-color: "#94a6be";
margin-right: 7px;
color: ${({ theme }) => theme.text};
${({ topic }) => themeColor(topic)}
`;
 
export const PopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  `;

 export const PopBrowseTtl = styled.h3`
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  `;

 export const PopBrowseWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `;

  export const PopBrowseForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
  `;

export const OpenedCardTheme = styled.input`
      display: none;
    &:checked + label {
      opacity: 100%;
    }
`;
  
export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
  position: relative;
  z-index: 10; 

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
}

@media screen and (max-width: 495px) {
    width: 100%;
    button {
        width: 100%;
        height: 40px;
        margin-right: 0px;
    }
}
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
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

export const ButtonChangeDelete = styled.button`
  border-radius: 4px;
  border: ${({ isEditing, theme }) => 
    isEditing ? 'none' : `0.7px solid ${theme.text}`};
  outline: none;
  background: ${({ isEditing, theme }) => 
    isEditing ? '#565EEF' : 'transparent'};
  color: ${({ isEditing, theme }) => 
    isEditing ? '#FFFFFF' : theme.text};

  a {
  color: ${({ theme }) => theme.text};
}

  ${Hover03}

  @media screen and (max-width: 495px) {   
    button {
    width: 100%;
    height: 40px;
    }
}
`;

export const ButtonClose = styled.button`
  margin-left: auto;
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;
  padding: 10px 20px;

  a {
  color: #FFFFFF;
}

${Hover01}
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
  background: ${({ theme }) => theme.textAreaBg}; 
  color: ${({ theme }) => theme.textSecondary}; 
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 10px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
`;

export const LabelSubttl = styled.label`
  display: flex;
  flex-direction: column;
`;


export const CategoriesThemesP = styled.p`
font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${({theme})=> theme.categoriyBg};

`;

export const PopBrowseStatus = styled.div`
    margin-bottom: 11px;
`;

export const BrowseStatusP = styled.div`
  margin-bottom: 14px;
  color: ${({theme})=> theme.text};
  font-size: 14px;
  font-weight: 600px;
  line-height: 16px;
  
`;

export const BrowseStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;  
  border-radius: 24px;
  cursor: pointer;
  margin-right: 8px;  
`;

export const BrowseStatusTheme = styled.p`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.selectedCategoryBg : theme.colors.categoryBg}; // Логика для выделения
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.selectedCategoryText : theme.colors.categoryText}; // Логика для текста
  opacity: ${({ isSelected }) => (isSelected ? '100%' : '40%')}; // Логика для opacity
`

export const StatusThemeLabel_1 = styled.p`
  display: inline-block;
  height: 30px;
  padding: 5px 14px 5px 14px;
  border-radius: 24px;
  margin-right: 2px;
  color: ${({theme})=> theme.textTheme};
  background-color: "#94A6BE";
`;

export const StatusThemeLabel = styled.label`
  display: inline-block;
  height: 30px;
  padding: 5px 14px 5px 14px;
  border: solid 0.7px ${({theme}) => theme.purpleBorder};
  border-radius: 24px;
  cursor: pointer;
  margin-right: 8px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.selectedCategoryBg : theme.colors.categoryBg}; // Логика для выделения
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.selectedCategoryText : theme.colors.categoryText}; // Логика для текста
  opacity: ${({ isSelected }) => (isSelected ? '100%' : '40%')}; // Логика для opacity
  &:hover {
    opacity: 100%;
    border: solid 1px ${({theme})=> theme.primary};
    color: ${({theme})=> theme.colors.hoverCategoryText};
    background-color: ${({theme})=> theme.colors.hoverCategoryBg};
  }
  white-space: nowrap;
`;