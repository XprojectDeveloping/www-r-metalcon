import { useTranslation } from "react-i18next";
import useGlobalFetch from "../components/UseGlobalFetch/useGlobalFetch";
import PageBanner from "../components/pageBanner/pageBanner";

function Certificate() {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  return (
    <>
      {data?.homebanner && (
        <PageBanner
          dataBanner={data?.homebanner}
          text={t("pageBannerCertificate")}
          myLink={"/"}
        />
      )}
      <main>
        <div className="px-[5rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] my-[5rem] lg:my-[3rem] md:my-[2.5rem] sm:my-[1.5rem] flex flex-row lg:flex-col justify-center items-center gap-[3rem]">
          {data?.licency &&
            data?.licency?.map((item, index) => {
              return (
                <div
                  className="w-full overflow-hidden relative projectBox"
                  key={item.id || index}
                >
                  <img src={item?.src} alt="licency" />

                  <div className="text h-full flex justify-center items-center absolute opacity-[0] bottom-[-100px] w-full pt-[10px] pb-[10px] pl-[20px] pr-[20px] z-30 transition">
                    <h3 className="text-[#fff] text-[1.8rem] font-[400]">
                      {t("сertificateText")}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}
export default Certificate;
