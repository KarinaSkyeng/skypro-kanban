# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# skypro-kanban

# Приложение для управления задачами

## API

Приложение использует REST API для взаимодействия с задачами. Вот описание доступных эндпоинтов и методов:

### Базовый URL

`https://wedev-api.sky.pro/api/kanban`

### Эндпоинты и методы

1. **Получение всех задач**
   - **Метод:** `GET`
   - **URL:** `/`
   - **Заголовки:**
     - `Authorization: Bearer <token>`
   - **Описание:** Получает список всех задач.

   **Пример запроса:**
   ```javascript
   const tasks = await getTasks(token);