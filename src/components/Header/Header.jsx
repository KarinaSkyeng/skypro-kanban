import {useState} from "react";
import * as S from "./header.styled.js";
import { Container } from "../../globalStyle.styled";

export const Header = ({addCard, isDarkTheme, setIsDarkTheme}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpenUser = () => {
    setIsOpen(!isOpen)
   }

   const onChangeTheme = () =>{
      setIsDarkTheme(isDarkTheme === "light" ? "dark" : "light")
   }
  
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <div className={`header__logo ${isDarkTheme ? "_dark" : "_show _light"}`}>
            <a href="" target="_self">
              <img src={`images/logo${isDarkTheme ? "_dark" : ""}.png`} alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <S.HeaderBtnNew onClick={addCard} id="btnMainNew">
              <a>Создать новую задачу</a>
            </S.HeaderBtnNew>
            <S.HeaderUser onClick= {toggleOpenUser}>
              Ivan Ivanov</S.HeaderUser>
            {isOpen &&  
            <div className="header__pop-user-set pop-user-set" id="user-set-target">
              {/*<a href="">x</a>*/}
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>{isDarkTheme ? "Темная тема" : "Светлая тема"}</p>
                <input checked={isDarkTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>
            }
          </nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
