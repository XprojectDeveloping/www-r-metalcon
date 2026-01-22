import { useTranslation } from "react-i18next";
import PageBanner from "../components/pageBanner/pageBanner";
import useGlobalFetch from "../components/UseGlobalFetch/useGlobalFetch";
import contactGpsIco from "../assets/img/body/contact/contact-gps-ico.svg";
import contactPhoneIco from "../assets/img/body/contact/contact-phone-ico.svg";
import comtactEmailIco from "../assets/img/body/contact/contact-email-ico.svg";
import contactMapImg from "../assets/img/body/contact/contact-map-img.png";
function Contact() {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  return (
    <>
      {data?.homebanner && (
        <PageBanner
          dataBanner={data?.homebanner}
          myLink={"/"}
          text={t("pageBannerContact")}
        />
      )}
      <main>
        <div className="px-[5rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] my-[5rem] lg:my-[3rem] md:my-[2.5rem] sm:my-[1.5rem]">
          <div className="flex lg:flex-col lg:gap-[3rem] justify-between">
            <div className="flex flex-col lg:flex-row lg: justify-between sm:flex-col gap-[6rem] sm:gap-[1.5rem]">
              <div className="flex items-center gap-[2rem]">
                <img className="max-w-[3rem]" src={contactGpsIco} alt="gps" />
                <a
                  className="text-[1.8rem] lg:text-[1.1rem] hover:text-[#00008b]"
                  href="#"
                >
                  {t("contactLocation")}
                </a>
              </div>
              <div className="flex items-center gap-[2rem]">
                <img className="max-w-[3rem]" src={contactPhoneIco} alt="gps" />
                <a
                  className="text-[1.8rem] lg:text-[1.1rem] hover:text-[#00008b]"
                  href="tel:+994 77 218 18 44"
                >
                  {"+994 77 218 18 44 "}
                </a>
              </div>
              <div className="flex items-center gap-[2rem]">
                <img className="max-w-[3rem]" src={comtactEmailIco} alt="gps" />
                <a
                  className="text-[1.8rem] lg:text-[1.1rem] hover:text-[#00008b]"
                  href="mailto:servis@vkgroup.az"
                >
                  {"servis@vkgroup.az"}
                </a>
              </div>
            </div>
            <form>
              <div className="flex flex-col gap-[3rem]">
                <input
                  name="name"
                  type="text"
                  placeholder={t("contactInputName")}
                  className="lg:w-full"
                />
                <input
                  name="number"
                  type="number"
                  placeholder={t("contactInputNumber")}
                  className="lg:w-full"
                />
                <input
                  name="name"
                  type="email"
                  placeholder={t("contactInputEmail")}
                  className="lg:w-full"
                />
                <input
                  name="text"
                  type="email"
                  placeholder={t("contactInputMessage")}
                  className="lg:w-full"
                />

                <div>
                  <button
                    className="buttonBtn hover:text-[#ffffff] hover:bg-[#808080]"
                    type="submit"
                  >
                    {t("contactButton")}
                  </button>
                </div>
              </div>
            </form>

            <div>
              <img src={contactMapImg} alt="map" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Contact;
