import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./loginPage.styled.js";

export const LoginPage = ({setIsAuth}) => {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setIsAuth(true)
        navigate(routes.main)
    }
    return (
        <S.LoginWrapper>
        <S.ContainerSignin>
            <S.Modal>
				<S.ModalBlock>
					<S.ModalTitle>
						<h2>Вход</h2>
					</S.ModalTitle>
					<S.ModalFormLogin>
						<S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
						<S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
						<S.ModalBtnEnter id="btnEnter" onClick={handleLogin} >Войти</S.ModalBtnEnter>
						<S.ModarFormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={routes.register}>Регистрируйтесь здесь</Link>
						</S.ModarFormGroup>
					</S.ModalFormLogin>
				</S.ModalBlock>
            </S.Modal>
        </S.ContainerSignin>
    </S.LoginWrapper>
    )
}