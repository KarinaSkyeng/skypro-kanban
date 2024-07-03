import {useState} from "react";
import * as S from "./header.styled.js";
import { Container } from "../../glogalStyle.styled.js";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { useUserContext } from "../../context/useUserContext.js";

export const Header = ({addCard, isDarkTheme, setIsDarkTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
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
              Создать новую задачу
            </S.HeaderBtnNew>
            <S.HeaderUser onClick= {toggleOpenUser}>
              {user.name} </S.HeaderUser>
            {isOpen &&  
            <S.HeaderUserSet className="pop-user-set" id="user-set-target">
              {/*<a href="">x</a>*/}
              <S.PopUserSetName>{user.name}</S.PopUserSetName>
              <S.PopUserSetMail>{user.email}</S.PopUserSetMail>
              <S.PopUserSetTheme>
                Темная тема
                <input checked={isDarkTheme === "dark"} onChange={onChangeTheme} type="checkbox" className="checkbox" name="checkbox" />
              </S.PopUserSetTheme>
              <S.HeaderBtnExit>
                <Link to={routes.exit}>Выйти</Link>
              </S.HeaderBtnExit>
            </S.HeaderUserSet>
            }
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
