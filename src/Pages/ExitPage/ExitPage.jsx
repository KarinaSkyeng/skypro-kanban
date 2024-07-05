import { useUserContext } from '../../context/useUserContext.js';
import * as S from './exitPage.styled.js';
import { Link } from 'react-router-dom';

export function PopUser() {
    const { logout } = useUserContext();
    //const navigate = useNavigate();

    //function logout() {
        //localStorage.removeItem("user");
        //setUser(null);
       // navigate("/login");
    //}

    return (
        <S.PopExit id="popExit">
            <S.PopExitContainer>
                <S.PopExitBlock>
                    <div>
                        <S.PopExitTtl>Выйти из аккаунта?</S.PopExitTtl>
                    </div>
                    <S.PopExitForm id="formExit" action="#">
                        <S.PopExitFormGroup>
                            <S.PopExitYesButton id="exitYes" onClick={logout}>
                                <S.PopExitYesA>Да, выйти</S.PopExitYesA>
                            </S.PopExitYesButton>
                            <S.PopExitNoButton id="exitNo">
                                <Link to="/">Нет, остаться </Link>
                            </S.PopExitNoButton>
                        </S.PopExitFormGroup>
                    </S.PopExitForm>
                </S.PopExitBlock>
            </S.PopExitContainer>
        </S.PopExit>
    );
}
