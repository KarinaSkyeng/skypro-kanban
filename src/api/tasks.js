
const apiURL = "https://wedev-api.sky.pro/api/kanban"
const apiUrlOfOneTask = "https://wedev-api.sky.pro/api/kanban/";

export const getTasks = async(token) => {
    const response = await fetch(apiURL,
        { method: "GET", 
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
     
    if (!response.ok) { 
     throw new Error ("Не удалось загрузить данные, попробуйте позже")
    }
    return response.json() 
};

// Функция для добавления новой задачи
export const addTask = async (taskData, token) => {
  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error("Не удалось добавить задачу, попробуйте позже");
  }
  return response.json();
};

// получение задачи по id
export const getCardById = async (token, id) => {
  const response = await fetch(`${apiUrlOfOneTask}/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось найти задачу");
  }
  return response.json();
};

// Редактировать задачу
export async function editTask(token, id, { editTaskData }) {
  const response = await fetch(`${apiUrlOfOneTask}/${id}`, {
    method: "PUT",  
    headers: {
          Authorization: `Bearer ${token}`,
      },      
      body: JSON.stringify(editTaskData),
  });

  if (!response.ok) {
    throw new Error("Не удалось отредактировать задачу");
  }

  return response.json();
}

// Удалить задачу
export async function deleteTask(id, token) {
  const response = await fetch(`${apiUrlOfOneTask}/${id}`, {
    method: "DELETE",  
    headers: {
          Authorization: `Bearer ${token}`,
      },
  });

  if (!response.ok) {
    throw new Error("Не удалось удалить задачу");
  }

  return response.json();
}
