// Функция для получения значения на основе текущего языка
const getMultiLang = (az, ru, en) => {
  // Получение текущего языка из localStorage
  const lang = localStorage.getItem("i18nextLng");

  // Возврат значения в зависимости от текущего языка
  if (lang === "az") {
    return az; // Если язык азербайджанский
  } else if (lang === "ru") {
    return ru; // Если язык русский
  } else if (lang === "en") {
    return en; // Если язык английский
  } else {
    return az; // Значение по умолчанию — азербайджанский
  }
};

export { getMultiLang };
