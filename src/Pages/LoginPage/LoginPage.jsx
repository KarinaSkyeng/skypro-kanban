import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./loginPage.styled.js";
import { useState } from "react";
import { signIn } from "../../api/user.js";
import { useUserContext } from "../../context/useUserContext";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { setUser } = useUserContext();
    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        let errors = {
            login: formData.login === '',
            password: formData.password === '',
        };

        if (errors.login && errors.password) {
            setError("Заполните эл. почту и пароль.");
            return;
        } else if (errors.login) {
            setError("Введите эл. почту.");
            return;
        } else if (errors.password) {
            setError("Введите пароль.");
            return;
        }

        try {
            const res = await signIn(formData);
            setUser(res.user);
            localStorage.setItem('user', JSON.stringify(res));
            navigate(routes.main);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        }
    };

    return (
        <S.LoginWrapper>
            <S.ContainerSignin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTitle>
                            <h2>Вход</h2>
                        </S.ModalTitle>
                        <S.ModalFormLogin onSubmit={handleLogin}>
                            <S.ModalInput
                                onChange={(e) => setFormData({...formData, login: e.target.value})}
                                type="text"
                                name="login"
                                value={formData.login}
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <S.ModalInput
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                type="password"
                                name="password"
                                value={formData.password}
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            {error && <p>{error}</p>}
                            <S.ModalBtnEnter id="btnEnter" type="submit">
                                Войти
                            </S.ModalBtnEnter>
                            <S.ModarFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={routes.register}>Регистрируйтесь здесь</Link>
                            </S.ModarFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerSignin>
        </S.LoginWrapper>
    );
};
