import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./loginPage.styled.js";
import { useState } from "react";
import { signIn } from "../../api/user.js";

export const LoginPage = ({setUser}) => {    
    const navigate = useNavigate()
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        login: "",
        password: "",
    })

    const handleLogin = (e) => {
        e.preventDefault()
        if (formData.login === "") {
            setError("Введите логин")
            return
        }
        if (formData.password === "") {
            setError("Введите пароль")
            return
        }
        
        signIn(formData)
        .then ((res) => {
            console.log(res.user)
            setUser(res.user)
            navigate(routes.main)
        })    
        .catch((error) => {
            console.log(error.message)
            setError(error.message)
        })            
    }

    return (
        <S.LoginWrapper>
        <S.ContainerSignin>
            <S.Modal>
				<S.ModalBlock>
					<S.ModalTitle>
						<h2>Вход</h2>
					</S.ModalTitle>
					<S.ModalFormLogin onSubmit={handleLogin}>
						<S.ModalInput onChange={(e) => setFormData({...formData, login: e.target.value})} type="text" name="login" id="formlogin" placeholder="Эл. почта" />
						<S.ModalInput onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" name="password" id="formpassword" placeholder="Пароль" />
						{error && <p>{error}</p>}
                        <S.ModalBtnEnter id="btnEnter" type="submit">Войти</S.ModalBtnEnter>
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