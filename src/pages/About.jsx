import useGlobalFetch from "../components/UseGlobalFetch/useGlobalFetch";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import DOMPurify from "dompurify";
import PageBanner from "../components/pageBanner/pageBanner.jsx";
import { useTranslation } from "react-i18next";
function About() {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");

  return (
    <>
      {data?.homebanner && (
        <PageBanner
          dataBanner={data?.homebanner}
          text={t("pageBannerAboutText")}
          myLink={"/"}
        />
      )}

      <div className="px-[5rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] my-[5rem] lg:my-[3rem] sm:my-[2.5rem] xs:my-[1.5rem] relative">
        <div className="flex lg:flex-col gap-[6rem] md:gap-[3rem] mb-[3rem]">
          <img src={data?.about?.src} alt="about-img" />

          <div
            className="text-[1.5em] xs:text-[1.4rem] text-[#000000] font-light"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                ml(
                  data?.about?.text_az || "",
                  data?.about?.text_ru || "",
                  data?.about?.text_en || "",
                ),
              ),
            }}
          />
        </div>
      </div>
    </>
  );
}
export default About;
