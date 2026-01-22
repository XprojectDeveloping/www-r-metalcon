import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Компонент Lang для управления языковыми настройками
function Lang({ toggle, swichLang }) {
  const { i18n } = useTranslation(); // Хук для работы с переводами
  const curretLang = i18n.language ? i18n.language.split("-")[0] : "az"; // Определение текущего языка

  useEffect(() => {
    // Сохранение текущего языка в localStorage, если он изменился
    if (localStorage.getItem("i18nextLng") !== curretLang) {
      localStorage.setItem("i18nextLng", curretLang);
    }
  }, [curretLang]); // Выполняется при изменении curretLang

  return (
    <>
      {/* Контейнер для отображения текущего языка и переключателя */}
      <div className="relative text-black">
        <div className="flex items-center cursor-pointer" onClick={toggle}>
          <button
            className="text-[#ffffff] lowercase text-[1.4rem]"
            name="button"
            type="button"
          >
            {curretLang} {/* Отображение текущего языка */}
          </button>
        </div>
        {swichLang} {/* Элемент для переключения языка */}
      </div>
    </>
  );
}

export default Lang;
