import { useTranslation } from "react-i18next";
import homePageAboutLine from "../../assets/img/body/homepage-services-line.svg";
import { getMultiLang as ml } from "../../components/Language/translation/MultiLang.js";

import { Link } from "react-router-dom";
function HomePageProjects({ dataProjects }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className="px-[5rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem]">
        <div className="flex items-center pt-[3rem] md:pt-[2.5rem] sm:pt-[1.5rem]">
          <img
            className="max-w-[10rem] pr-[3rem]"
            src={homePageAboutLine}
            alt="line"
          />
          <h2 className="text-[2.5rem]">{t("homePageAboutH2")}</h2>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-6 md:grid-cols-3 gap-[3rem] my-[5rem] lg:my-[3rem] md:my-[2.5rem] sm:my-[1.5rem]">
          {dataProjects &&
            dataProjects?.slice(0, 4).map((item, index) => {
              return (
                <div className="col-span-3" key={item.id || index}>
                  <Link
                    className="w-full overflow-hidden relative projectBox"
                    to={`/projects/s/${item.id}/${item.slug}`}
                  >
                    <img src={item.cover} alt="project-img" />

                    <div className="text absolute opacity-[0] bottom-[-100px] w-full border-t-[1px] border-t-[#4A9CC2] pt-[10px] pb-[10px] pl-[20px] pr-[20px] z-30 transition">
                      <h3 className="text-[#fff] text-[1.2rem] font-[400]">
                        {ml(
                          item?.name_az || "",
                          item?.name_ru || "",
                          item?.name_en || "",
                        )}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}

          <div>
            <Link
              className="text-[1.3rem] border-[1px] border-[solid] border-[black] py-[1rem] px-[2.9rem] hover:text-[#ffffff] hover:bg-[#808080]"
              to={"/projects"}
            >
              {t("homePageProjectButton")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageProjects;
