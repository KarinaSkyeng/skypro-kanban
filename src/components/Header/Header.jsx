import {useState} from "react";
import * as S from "./header.styled.js";
import { Container } from "../../glogalStyle.styled.js";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { useUserContext } from "../../context/useUserContext.js";
import { NewCardPage } from "../../Pages/AddCardPage/AddCardPage.jsx";

export const Header = ({isDarkTheme, onChangeTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
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
            <Link to={routes.addNew}>
            <S.HeaderBtnNew href="#popNewCard" onClick={NewCardPage}>
              Создать новую задачу
            </S.HeaderBtnNew>
            </Link>
            <S.HeaderUser onClick= {toggleOpenUser}>
              {user.name} </S.HeaderUser>
            {isOpen &&  
            <S.HeaderUserSet>
              {/*<a href="">x</a>*/}
              <S.PopUserSetName>{user.name}</S.PopUserSetName>
              <S.PopUserSetMail>{user.email}</S.PopUserSetMail>
              <S.PopUserSetTheme>
              <span style={{ color: isDarkTheme === "dark" ? "#FFF" : "#000" }}>Темная тема</span>
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
