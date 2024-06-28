
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { routes } from "../../router/routes";
import * as S from "./register.styled.js";
import { useState } from "react";
import { signUp } from "../../api/user.js";


export const Register = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		login: "",
		password: "",
	});
	const [error, setError] = useState('');

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await signUp(formData);
			navigate(routes.login);		
		} catch (error) {
			setError(error.message);
		}
	}
    return (
        <S.RegisterWrapper>
        <S.ContainerSignup>
            <S.ModalReg>
				<S.ModalBlockReg>
					<S.ModalTitleReg>
						<h2>Регистрация</h2>
					</S.ModalTitleReg>
					<S.ModalFormLoginReg onSubmit={handleRegister}>
						<S.ModalInputReg type="text" name="first-name" id="first-name" placeholder="Имя" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
						<S.ModalInputReg type="text" name="login" id="loginReg" placeholder="Эл. почта" value={formData.login} onChange={(e) =>setFormData({...formData, login: e.target.value})}/>
						<S.ModalInputReg type="password" name="password" id="passwordFirst" placeholder="Пароль" value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
						{error && <p>{error}</p>}
						<S.ModalBtnSignupEnt id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </S.ModalBtnSignupEnt>
						<S.ModarFormGroupReg>
							<p>Уже есть аккаунт?  <Link to={routes.login}>Войдите здесь</Link></p>
						</S.ModarFormGroupReg>
					</S.ModalFormLoginReg>
				</S.ModalBlockReg>
			</S.ModalReg>
        </S.ContainerSignup>
    </S.RegisterWrapper>
    );
};
