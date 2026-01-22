import { useTranslation } from "react-i18next";
import homePageAboutLine from "../../assets/img/body/homepage-services-line.svg";
import { getMultiLang as ml } from "../../components/Language/translation/MultiLang.js";
import DOMPurify from "dompurify";

function HomePageSpecial({ dataSpecial }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className="px-[5rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem]">
        <div className="flex items-center pt-[3rem] sm:pt-[1.5rem]">
          <img
            className="max-w-[10rem] pr-[3rem]"
            src={homePageAboutLine}
            alt="line"
          />
          <h2 className="text-[2.5rem]">{t("homePageSpecialH2")}</h2>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-6 gap-[5rem] lg:gap-[3rem] md:gap-[2.5rem] items-center py-[3rem] sm:py-[1.5rem]">
          {dataSpecial &&
            dataSpecial?.map((item, index) => {
              return (
                <div
                  className="specialCardHov flex items-center flex-row gap-[2rem] col-span-6 p-[3rem] md:p-[1.5rem]"
                  key={item.id || index}
                >
                  <img
                    className="max-w-[8rem]"
                    src={item?.cover}
                    alt="specialImg"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-[2rem] text-[#000000] font-semibold">
                      {ml(
                        item?.name_az || "",
                        item?.name_ru || "",
                        item?.name_en || "",
                      )}
                    </h2>

                    <div
                      className="text-[1.5rem] sm:text-[1.3rem] text-[#000000]"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          ml(
                            item?.text_az || "",
                            item?.text_ru || "",
                            item?.text_en || "",
                          ),
                        ),
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default HomePageSpecial;
