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

export const signUp = async ({ login, name, password }) => {
    const response = await fetch("https://wedev-api.sky.pro/api/user", 
        {
          method: "POST",
          body: JSON.stringify({
            login,
            name,
            password,
          }),
        });

        if (response.status === 401) {
            throw new Error("Нет авторизации");
          }
          if (response.status === 400) {
            throw new Error("Пользователь с таким логином уже существует");
          }
            if (response.status === 500) {
              throw new Error("Сервер сломался");
            }else {
            const data = await response.json();
            return data;
          }
        }