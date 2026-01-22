import { useEffect, useState } from "react";

// Хук useGlobalFetch для выполнения глобального запроса данных
function useGlobalFetch() {
  // Состояние для хранения данных, полученных из API
  const [data, setData] = useState([]);

  useEffect(() => {
    // Выполнение запроса к API при монтировании компонента
    fetch(`${import.meta.env.VITE_API}/fulldata`)
      .then((res) => {
        // Проверка успешности ответа
        if (!res.ok) {
          throw new Error(`HTTP error ! status:${res.status}`);
        }
        return res.json(); // Преобразование ответа в JSON
      })
      .then((response) => {
        setData(response); // Сохранение данных в состояние
      })
      .catch((error) => {
        // Обработка ошибок запроса
        console.log("Fetch error:", error);
      });
  }, []); // Пустой массив зависимостей для выполнения эффекта только один раз

  // Возврат данных из хука
  return { data };
}

export default useGlobalFetch;
