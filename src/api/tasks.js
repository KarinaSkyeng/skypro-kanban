
const apiURL = "https://wedev-api.sky.pro/api/kanban"

export const getTasks = async(token) => {
    const response = await fetch(apiURL,
        { method: "GET", 
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
    ); 
    if (!response.ok) //{Если не ок, то ошибка}
    { throw new Error ("Не удалось загрузить данные, попробуйте позже")}
    return response.json() 
}
