import servicesCardArrow from "../../assets/img/body/services-card-arrow.svg";
import { useTranslation } from "react-i18next";
import useGlobalFetch from "../UseGlobalFetch/useGlobalFetch";
import { getMultiLang as ml } from "../Language/translation/MultiLang.js";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

function HomePageServicesList({ data }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1">
        {data &&
          data?.map((item, index) => {
            return (
              <Link
                to={`/services/${item.id}/${item.slug}`}
                key={item.id || index}
              >
                <div className="services-hov services-card flex justify-between items-center flex-col h-full w-full p-[3rem] md:p-[2.5rem] sm-[1.5rem]">
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
                      className="arrow max-w-[3rem]"
                      src={servicesCardArrow}
                      alt="arrow"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}
export default HomePageServicesList;
