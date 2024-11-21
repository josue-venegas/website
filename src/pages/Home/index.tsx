import { lazy } from "react";

import { withTranslation } from "react-i18next";

const MainContainer = lazy(() => import("../../common/MainContainer"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));

const Home = ({ t }: any) => {

  return (
  <>
    <ScrollToTop />
    <MainContainer>
      <ContentBlock
        type="right"
        textColor="#fff"
        title={t("Main Title")}
        content={t("Main Description")}
        button={[
          {
            "title": t("More info"),
            "color": "#fff",
            "scrollTo": "about",
          },
          {
            "title": t("Contact Title"),
            "scrollTo": "contact"
          }          
        ]}
        icon="Coding-bro.svg"
        id="main"
      />
    </MainContainer>
    <Container>
      <ContentBlock
        type="left"
        title={t("About Title")}
        content={t("About Description")}
        /* section={[
          {
            "title": "About Content Section Why Antd Title",
            "content": "About Content Section Why Antd Text",
            "icon": "notes.svg"
          },
          {
            "title": "About Content Section Why Styled Components Title",
            "content": "About Content Section Why Styled Components Text",
            "icon": "notes.svg"
          }
        ]} */
        icon="Webinar-pana.svg"
        id="about"
      />
      <MiddleBlock
        title={t("Projects Title")}
        content={t("Projects Description")}
        id="projects"
      />
      {/* <ContentBlock
        type="right"
        title={t("Mission Content Title")}
        content={t("Mission Content Text")}
        icon="graphs.svg"
        id="vision"
      /> */}
      {/* <ContentBlock
        type="left"
        title={t("Product Content Title")}
        content={t("Product Content Text")}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={t("Contact Title")}
        content={t("Contact Description")}
        id="contact"
      />
    </Container>
  </>
  );
};

export default withTranslation()(Home);
