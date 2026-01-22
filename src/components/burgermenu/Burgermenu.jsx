import { useState } from "react";
import { useTranslation } from "react-i18next";
import headerBurgerMenuIco from "../../assets/img/header/header-burgerMenu-ico.svg";
import headerBurgerMenuClose from "../../assets/img/header/header-burgerMenu-close-ico.svg";
import { NavLink } from "react-router-dom";
function Burgermenu() {
  const [t] = useTranslation("translation");
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <button onClick={toggleMenu} className="burger-hide lg:flex">
        <img
          className="max-w-[3rem]"
          src={headerBurgerMenuIco}
          alt="burger-menu"
        />
      </button>
      {open && (
        <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-1000" />
      )}
      <div
        className={`
          fixed top-0 right-0 h-full w-[350px] bg-[#808080]
          p-[2rem] flex flex-col gap-[2rem]
          z-[1050] transition-transform duration-300
          text-[2rem]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button onClick={closeMenu}>
          <img
            src={headerBurgerMenuClose}
            className="max-w-[3rem]"
            alt="burger-close"
          />
        </button>

        <NavLink className="text-[1.4rem] text-[#fff] font-light" to={"/about"}>
          {t("headerAbout")}
        </NavLink>

        <NavLink
          className="text-[1.4rem] text-[#fff] font-light"
          to={"/services/2/anbar-binalari"}
        >
          {t("headerServices")}
        </NavLink>

        <NavLink
          className="text-[1.4rem] text-[#fff] font-light"
          to={"/projects"}
        >
          {t("headerProjects")}
        </NavLink>

        <NavLink
          className="text-[1.4rem] text-[#fff] font-light"
          to={"/certificate"}
        >
          {t("headerCertificate")}
        </NavLink>

        <NavLink
          className="text-[1.4rem] text-[#fff] font-light"
          to={"/contact"}
        >
          {t("headerContact")}
        </NavLink>
      </div>
    </>
  );
}
export default Burgermenu;
