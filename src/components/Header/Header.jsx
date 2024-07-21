import {useState} from "react";
import * as S from "./header.styled.js";
import { Container } from "../../glogalStyle.styled.js";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { useUserContext } from "../../context/useUserContext.js";
// import { PopBrowse } from "../../components/PopBrowse/PopBrowse.jsx";


export const Header = ({isDarkTheme, setIsDarkTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

   // Добавляем проверку на наличие user
   if (!user) {
    return null;
  }

  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
   };

   const onChangeTheme = () => {
    setIsDarkTheme(isDarkTheme === "light" ? "dark" : "light");  
   };

   const openModal = () => {
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
    
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo >
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo >
          <S.HeaderNav>            
            <S.HeaderBtnNew onClick={openModal} value={isModalOpen}><Link to={routes.add}>
              Создать новую задачу
            </Link>
            </S.HeaderBtnNew> 
            {/* <PopBrowse />            */}
            <S.HeaderUser onClick={toggleOpenUser}>
              {user.name} </S.HeaderUser>
            {isOpen ?  
            <S.HeaderUserSet>
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
            </S.HeaderUserSet> : null
            }
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};