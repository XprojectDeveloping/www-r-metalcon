import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import footerLogo from "../assets/img/footer/footer-logo-img.svg";
import footerLogoTwo from "../assets/img/footer/footer-logo-img-two.png";
function Footer({ text }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <footer>
        <div className="bg-[#003E65E3] text-center py-[5rem] lg:py-[3rem] sm:py-[2.5rem]">
          <Link
            className="text-[#FFFFFF] text-[1.6rem] sm:text-[1.1rem] font-bold hover:text-[#808080]"
            to={"/contact"}
          >
            {t("upFooterTitle")}
          </Link>
        </div>

        <div className="bg-[#000000E3] flex sm:flex-col items-center justify-between sm:gap-[3rem] py-[1.9rem] lg:py-[1.5rem] px-[10rem] lg:px-[5rem] md:px-[3rem] sm:px-[2.5rem] xs:px-[1.5rem]">
          <div className="">
            <Link to={"/"}>
              <img src={footerLogo} alt="footer-metal-con" />
            </Link>
          </div>

          <div className="flex xs:flex-col items-center gap-[2rem]">
            <Link to={"/"}>
              <img
                className="max-w-[10rem]"
                src={footerLogoTwo}
                alt="footer-corn"
              />
            </Link>

            <p className="text-[1.6rem] text-[#ffffff] font-normal">
              {t("bottomFooterText")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
