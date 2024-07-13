import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./exitPage.styled.js";
import { useUserContext } from "../../context/useUserContext.js";

export const ExitPage = ({ setUser }) => {
    const nav = useNavigate();
    const { logout: contextLogout } = useUserContext();

    const handleLogout = () => {
        if (setUser) {
            setUser(false);
            nav(routes.login);
        } else if (contextLogout) {
            contextLogout();
        }
    };

    return (
        <S.PopExit id="popExit">
            <S.PopExitContainer>
                <S.PopExitBlock>
                    <S.PopExitTtl>Выйти из аккаунта?</S.PopExitTtl>
                    <S.PopExitForm id="formExit" action="#">
                        <S.PopExitFormGroup>
                            <S.PopExitYesButton id="exitYes" onClick={handleLogout}>
                                <S.PopExitYesA>Да, выйти</S.PopExitYesA>
                            </S.PopExitYesButton>
                            <S.PopExitNoButton id="exitNo">
                                <Link to={routes.main}>Нет, остаться</Link>
                            </S.PopExitNoButton>
                        </S.PopExitFormGroup>
                    </S.PopExitForm>
                </S.PopExitBlock>
            </S.PopExitContainer>
        </S.PopExit>
    );
};
