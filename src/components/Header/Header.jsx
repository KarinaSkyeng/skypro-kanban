import {useState} from "react";
import * as S from "./header.styled.js";
import { Container } from "../../glogalStyle.styled.js";

export const Header = ({addCard, isDarkTheme, setIsDarkTheme}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpenUser = () => {
    setIsOpen(!isOpen)
   };

   const onChangeTheme = () => {
    setIsDarkTheme(isDarkTheme === "light" ? "dark" : "light");  
   };
  
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo >
          <S.HeaderLogo  className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo >
          <S.HeaderNav>
            <S.HeaderBtnNew onClick={addCard}>
              <a>Создать новую задачу</a>
            </S.HeaderBtnNew>
            <S.HeaderUser onClick= {toggleOpenUser}>
              Ivan Ivanov</S.HeaderUser>
            {isOpen &&  
            <S.HeaderUserSet className="pop-user-set" id="user-set-target">
              {/*<a href="">x</a>*/}
              <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
              <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
              <S.PopUserSetTheme>
                <p>Темная тема</p>
                <input checked={isDarkTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox" />
              </S.PopUserSetTheme>
              <S.HeaderBtnExit>
                <a href="#popExit">Выйти</a>
              </S.HeaderBtnExit>
            </S.HeaderUserSet>
            }
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
