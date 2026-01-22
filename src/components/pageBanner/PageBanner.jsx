import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import pageBannerArrow from "./pageBanner-arrow-ico.svg";
function PageBanner({ dataBanner, myLink, text }) {
  const [t] = useTranslation("translation");
  return (
    <>
      {dataBanner &&
        dataBanner?.map((item, index) => {
          return (
            <div key={item.id || index}>
              <div className="pageBanner">
                <img
                  src={item?.src}
                  className="w-full h-[250px] sm:h-[180px] xs:h-[170px]"
                  alt="banner"
                />

                <div className="max-w-[1320px] m-auto">
                  <nav className="flex items-center absolute bottom-[5px] gap-[1rem] lg:pl-[3rem] text-[#ffffff]">
                    <Link
                      className="text-[1.6rem] xs:text-[1.1rem] font-normal text-[#ffffff]"
                      to={myLink}
                    >
                      {t("pageBannerLink")}
                    </Link>
                    <span>
                      <img
                        className="max-w-[1rem]"
                        src={pageBannerArrow}
                        alt="arrow"
                      />
                    </span>
                    <p className="text-[1.6rem] xs:text-[1.1rem] font-normal text-[#ffffff]">
                      {text}
                    </p>
                  </nav>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
export default PageBanner;
