import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ProjectsSingle from "../pages/ProjectsSingle";
import Certificate from "../pages/Certificate";
import Contact from "../pages/Contact";
const PageRouters = () => {
  const page_Routers = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services/:id/:slug",
      element: <Services />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/projects/s/:id/:slug",
      element: <ProjectsSingle />,
    },
    {
      path: "/certificate",
      element: <Certificate />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  const route = useRoutes(page_Routers);
  return <>{route}</>;
};
export default PageRouters;
