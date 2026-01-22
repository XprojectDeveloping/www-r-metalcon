import servicesCardArrow from "../assets/img/body/services-card-arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import useGlobalFetch from "../components/UseGlobalFetch/useGlobalFetch.jsx";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import PageBanner from "../components/PageBanner/PageBanner.jsx";
function Services() {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  const { slug } = useParams();
  const curretItem = data?.services?.find((item) => item?.slug === slug);
  console.log(data.services);
  console.log(slug);

  return (
    <>
      {data?.homebanner && (
        <PageBanner
          dataBanner={data?.homebanner}
          text={t("pageBannerServices")}
          myLink={"/"}
        />
      )}
      {data?.services && (
        <section>
          <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1">
            {data?.services &&
              data?.services?.map((item, index) => {
                return (
                  <NavLink
                    key={index.id || index}
                    to={`/services/${item.id}/${item.slug}`}
                  >
                    <div className="services-hov services-card flex justify-between items-center flex-col h-full w-full p-[3rem] lg:p-[2.5rem] md:p-[1.8rem]">
                      <div>
                        <img
                          className="w-full h-[70px] object-cover "
                          src={item?.cover}
                          alt={t(item?.alt_az, item?.alt_ru, item?.alt_en)}
                        />
                      </div>

                      <h2 className="font-[700] text-[16px] uppercase text-[#fff] pt-[20px] mb-[10px] pl-[0] pr-[0]">
                        {ml(
                          item?.name_az || "",
                          item?.name_ru || "",
                          item?.name_en || "",
                        )}
                      </h2>

                      <span className="bg-[#4A9CC2] w-[80px] h-[2px] block "></span>

                      <div
                        className="font-extralight text-[1.4rem] pb-[2rem] text-center text-[#fff]"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            ml(item?.text_az, item?.text_ru, item?.text_en),
                          ),
                        }}
                      />

                      <div>
                        <img
                          className="max-w-[3rem] arrow-down"
                          src={servicesCardArrow}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </NavLink>
                );
              })}
          </div>
          <div className="flex justify-between flex-row lg:flex-col gap-[1rem] px-[5rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] my-[5rem] lg:my-[3rem] sm:my-[2.5rem] xs:my-[1.5rem]">
            <div>
              {data?.services &&
                data?.services?.slice(0, 1)?.map((item, index) => {
                  return (
                    <div key={item.id || index}>
                      <div
                        className="servicesText"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            ml(
                              item.text2_az || "",
                              item.text2_ru || "",
                              item.text2_en || "",
                            ),
                          ),
                        }}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-row lg:flex-col">
              {curretItem?.images &&
                curretItem?.images?.slice(0, 1).map((item, index) => {
                  return (
                    <div key={index.id || index}>
                      <img src={item.src} alt="img" />
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Services;
