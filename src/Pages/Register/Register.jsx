import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./register.styled.js";
import { useState } from "react";
import { signUp } from "../../api/user.js";
import { useUserContext } from "../../context/useUserContext.js";

export const Register = () => {
    const { setUser } = useUserContext();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        login: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const { login, name, password } = formData;
        // Проверяем заполнение всех полей
        if (!login || !name || !password) {
            setError("Заполните все поля");
            return;
        }

        setLoading(true); // Включаем индикацию загрузки
        setError(null); // Сбрасываем предыдущее сообщение об ошибке
       
        try {   
            const response = await signUp({ login, name, password });
            setUser(response); // Устанавливаем пользователя в состояние при успешной регистрации
            localStorage.setItem("user", JSON.stringify(response)); // Сохраняем пользователя в локальное хранилище
            navigate(routes.login); // Перенаправляем на страницу входа после успешной регистрации
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Выключаем индикацию загрузки
        }
    };

    return (
        <S.RegisterWrapper>
            <S.ContainerSignup>
                <S.ModalReg>
                    <S.ModalBlockReg>
                        <S.ModalTitleReg>
                            <h2>Регистрация</h2>
                        </S.ModalTitleReg>
                        <S.ModalFormLoginReg onSubmit={handleRegister}>
                            <S.ModalInputReg
                                type="text"
                                name="first-name"
                                id="first-name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                placeholder="Имя"
                            />
                            <S.ModalInputReg
                                type="text"
                                name="login"
                                id="loginReg"
                                value={formData.login}
                                onChange={(e) => setFormData({...formData, login: e.target.value})}
                                placeholder="Эл. почта"
                            />
                            <S.ModalInputReg
                                type="password"
                                name="password"
                                id="passwordFirst"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                placeholder="Пароль"
                            />
                            {error && <p>{error}</p>}
                            <S.ModalBtnSignupEnt type="submit" disabled={loading}>
                                Зарегистрироваться
                            </S.ModalBtnSignupEnt>
                            <S.ModarFormGroupReg>
                                <p>Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link></p>
                            </S.ModarFormGroupReg>
                        </S.ModalFormLoginReg>
                    </S.ModalBlockReg>
                </S.ModalReg>
            </S.ContainerSignup>
        </S.RegisterWrapper>
    );
};
