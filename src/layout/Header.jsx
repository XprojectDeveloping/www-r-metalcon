import { useEffect, useState } from "react";
import headerSearchIco from "../assets/img/header/header-search-ico.svg";
import headerWhatsApp from "../assets/img/header/header-whatsapp-ico.svg";
import headerLogo from "../assets/img/header/header-logo-img.svg";
import { useTranslation } from "react-i18next";
import Lang from "../components/Language/Lang";
import { Link, NavLink } from "react-router-dom";
import Burgermenu from "../components/Burgermenu/Burgermenu";
function Header({ text }) {
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const langs = ["az", "ru", "en"];

  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  };

  const filteredLang = (lang = "az") => {
    return lang != localStorage.getItem("i18nextLng");
  };

  const langFilter = langs?.filter(filteredLang);

  const [scroll, setSctoll] = useState();
  const SCROLL_Y = 200;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_Y) {
        setSctoll(true);
      } else {
        setSctoll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[2000] ">
        <div
          className={`flex justify-end items-center gap-[3rem] transition-all duration-300 ease-in-out ${
            scroll ? "hidden" : ""
          }`}
        >
          <div className="flex items-center gap-[3rem]">
            <div>
              <a
                className="text-[1.5rem] text-[#ffff] leading-[100%] font-medium hover:text-[#197cc3]"
                href="tel:+994 55 555 55 55"
              >
                {(text = "+994 55 555 55 55")}
              </a>
            </div>

            <div>
              <button type="submit">
                <img
                  className="max-w-[2.2rem]"
                  src={headerSearchIco}
                  alt={t("headerSearchIcoAlt")}
                />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#1677A4] p-[1.8rem]  xs:p-[1.13rem]">
              <Lang
                toggle={() => setOpen(!open)}
                swichLang={
                  open && (
                    <div className="absolute mt-6 left-[-2px] top-10 h-[50px] flex flex-col items-center bg-white shadow-lg rounded-md border border-gray-300">
                      {langFilter?.map((item, index) => {
                        return (
                          <button
                            onClick={() => changeLang(item)}
                            name="button"
                            type="button"
                            className="text-[#000] z-[200] text-[1.2rem] p-[1rem] hover:bg-gray-200 transitions bg-[#f9f9f9] rounded-md w-full text-center"
                            key={item.id || index}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  )
                }
              />
            </div>

            <div className="bg-[#4A9CC2] p-[1rem]">
              <button type="submit">
                <img
                  className="xs:max-w-[1.9rem]"
                  src={headerWhatsApp}
                  alt={t("headerWhatsApp")}
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-between lg:px-[3rem] xs:px-[1rem] p-[1rem] ${
            scroll ? "bg-[#000000]" : ""
          }`}
        >
          <div
            className={`ml-[4rem] lg:ml-[0rem] md:ml-[0rem] ${scroll ? "ml-[1rem]" : ""}`}
          >
            <Link to={"/"}>
              <img
                className="max-w-[10rem] xs:max-w-[8rem]"
                src={headerLogo}
                alt={t("headerLogoImg")}
              />
            </Link>
          </div>

          <div className="h-[100%] bg-[#000000b3] py-[2.4rem] px-[11rem] lg:hidden">
            <ul className="flex gap-[10rem] h-[100%] justify-between items-center">
              <li>
                <NavLink
                  className="text-[1.4rem] text-[#fff] font-light"
                  to={"/about"}
                >
                  {t("headerAbout")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[1.4rem] text-[#fff] font-light"
                  to={"/services/2/anbar-binalari"}
                >
                  {t("headerServices")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[1.4rem] text-[#fff] font-light"
                  to={"/projects"}
                >
                  {t("headerProjects")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[1.4rem] text-[#fff] font-light"
                  to={"/certificate"}
                >
                  {t("headerCertificate")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[1.4rem] text-[#fff] font-light"
                  to={"/contact"}
                >
                  {t("headerContact")}
                </NavLink>
              </li>
            </ul>
          </div>

          <Burgermenu />
        </div>
      </header>
    </>
  );
}
export default Header;
