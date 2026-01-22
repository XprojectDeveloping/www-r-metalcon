import useGlobalFetch from "../components/UseGlobalFetch/useGlobalFetch";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomePageServicesList from "../components/Sections/HomePageServicesList.jsx";
import HomePageAbout from "../components/Sections/HomePageAbout.jsx";
import HomePageSpecial from "../components/Sections/HomePageSpecial.jsx";
import HomePageProjects from "../components/Sections/HomePageProjects.jsx";
function HomePage() {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  return (
    <>
      <main>
        <div>
          {data?.homebanner &&
            data?.homebanner?.map((item, index) => {
              return (
                <div key={item.id || index} className="slider-item">
                  <img
                    src={item?.src}
                    className="w-full h-[650px] md:h-[450px]"
                    alt="bodyBanner"
                  />
                </div>
              );
            })}
        </div>

        <div className="absolute top-[50%] md:top-[34%] left-[50%] z-[50] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
          {data?.homebanner &&
            data?.homebanner?.map((item, index) => {
              return (
                <>
                  <div className="text-center" key={item.id || index}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          ml(item?.title_az, item?.title_ru, item?.title_en),
                        ),
                      }}
                    />
                  </div>
                </>
              );
            })}

          <div className="flex items-center gap-[6rem] sm:gap-[3rem] mt-[3rem]">
            <Link
              className="text-[1.5rem] lg:text-[1.3rem] xs:text-[1rem] text-[#FFFFFF] font-normal leading-[100%] border-[1px] py-[1.3rem] px-[3.3rem] sm:px-[1.5rem] hover:bg-slate-500"
              to={"/about"}
            >
              {t("mainBannerButton")}
            </Link>
            <Link
              className="text-[1.5rem] lg:text-[1.3rem] xs:text-[1rem] text-[#FFFFFF] font-normal leading-[100%] border-[1px] py-[1.3rem] px-[3.3rem] sm:px-[1.5rem] hover:bg-slate-500"
              to={"/contact"}
            >
              {t("mainBannerButtonTwo")}
            </Link>
          </div>
        </div>

        {data?.services && (
          <section>
            <HomePageServicesList data={data?.services} />
          </section>
        )}

        {data?.about && (
          <section className="my-[5rem] lg:my-[3rem] md:my-[2.5rem] sm:my-[1.5rem]">
            <HomePageAbout
              img={data?.about?.src}
              Ptext={ml(
                data?.about?.text_az || "",
                data?.about?.text_ru || "",
                data?.about?.text_en || "",
              )}
            />
          </section>
        )}

        {data?.spesfics && (
          <section className="bg-[#F0EFEF]">
            <HomePageSpecial dataSpecial={data?.spesfics} />
          </section>
        )}

        {data?.projects && (
          <section>
            <HomePageProjects dataProjects={data?.projects} />
          </section>
        )}
      </main>
    </>
  );
}
export default HomePage;
