import { useTranslation } from "react-i18next";
import useGlobalFetch from "../components/UseGlobalFetch/useGlobalFetch";
import HomePageProjects from "../components/Sections/HomePageProjects";
import PageBanner from "../components/pageBanner/PageBanner";

function Projects() {
  const { data } = useGlobalFetch();
  const [t] = useTranslation("translation");
  return (
    <>
      <main>
        {data?.homebanner && (
          <PageBanner
            dataBanner={data?.homebanner}
            myLink={"/"}
            text={t("pageBannerProjects")}
          />
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

export default Projects;
