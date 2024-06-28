const apiURL = "https://wedev-api.sky.pro/api/user/login"

export const signIn = async({login, password}) => {
    const response = await fetch(apiURL,
        { method: "POST", 
          body: JSON.stringify ({
            login,
            password,
          })
        }
    ); 
    if (response.status === 400) {
        throw new Error("Неверный логин или пароль")
    }
    if (!response.ok) //{Если не ок, то ошибка}
    { throw new Error ("Не удалось загрузить данные, попробуйте позже")}
    return response.json() 
}

export const signUp = async (userData) => {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка регистрации');
    }

    return response.json();
};