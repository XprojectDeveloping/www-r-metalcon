import { useParams } from "react-router-dom";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import useGlobalFetch from "../components/UseGlobalFetch/useGlobalFetch.jsx";
import PageBanner from "../components/pageBanner/pageBanner";
import { useTranslation } from "react-i18next";

function ProjectsSingle() {
  const { data } = useGlobalFetch();
  const { slug } = useParams();
  const [t] = useTranslation("translation");
  const curretItem = data?.projects?.find((item) => item?.slug === slug);

  return (
    <>
      <main>
        <section>
          {data?.homebanner && (
            <PageBanner
              dataBanner={data?.homebanner}
              myLink={"/"}
              text={t("pageBannerProjects")}
            />
          )}

          <div className="my-[5rem] px-[8rem]">
            <div className="flex flex-row gap-[1rem]">
              {curretItem?.images &&
                curretItem?.images?.map((item, index) => {
                  return (
                    <div key={index.id || index}>
                      <img src={item?.src} alt="project" />
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default ProjectsSingle;
