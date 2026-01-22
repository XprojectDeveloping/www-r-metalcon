import homePageAboutLine from "../../assets/img/body/homepage-services-line.svg";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

function HomePageAbout({ img, Ptext }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className="px-[5rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem]">
        <div className="flex items-center mb-[3rem] md:mb-[2.5rem] sm:mb-[1.5rem]">
          <img
            className="max-w-[10rem] pr-[3rem]"
            src={homePageAboutLine}
            alt="line"
          />
          <h2 className="text-[2.5rem]">{t("homePageAboutH2")}</h2>
        </div>

        <div className="flex flex-row lg:flex-col gap-[6rem] lg:gap-[3rem] ">
          <img src={img} alt="about-img" />
          <div className="flex flex-col justify-around">
            <div
              className="text-[1.5em] sm:text-[1.3rem] sm:mb-[1.2rem] text-[#000000] font-light"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(Ptext) }}
            />

            <div className="flex justify-end">
              <Link
                className="text-[1.3rem] sm:text-[1.2rem] border-[1px] border-[solid] border-[black] py-[1rem] px-[2.9rem] hover:text-[#ffffff] hover:bg-[#808080]"
                to={"/about"}
              >
                {t("homePageAboutButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageAbout;
