
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./register.styled.js";

export const Register = () => {
    return (
        <S.RegisterWrapper>
        <S.ContainerSignup>
            <S.ModalReg>
				<S.ModalBlockReg>
					<S.ModalTitleReg>
						<h2>Регистрация</h2>
					</S.ModalTitleReg>
					<S.ModalFormLogin id="formLogUp" action="#">
						<S.ModalInputReg type="text" name="first-name" id="first-name" placeholder="Имя"/>
						<S.ModalInputReg type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<S.ModalInputReg type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						<S.ModalBtnSignupEnt id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </S.ModalBtnSignupEnt>
						<S.ModarFormGroup>
							<p>Уже есть аккаунт?  <Link to={routes.login}>Войдите здесь</Link></p>
						</S.ModarFormGroup>
					</S.ModalFormLogin>
				</S.ModalBlockReg>
			</S.ModalReg>
        </S.ContainerSignup>
    </S.RegisterWrapper>
    )
}