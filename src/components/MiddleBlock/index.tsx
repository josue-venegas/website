import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";
import { MiddleBlockSection, Content, Title, Subtitle, ContentWrapper, CardThumbnail, CardContainer, CardTitle, CardDescription, CardTagsContainer, CardTag, CardButtonsContainer, CardButton, CardContent } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  t: any;
  id: string;
}

interface SocialLinkProps {
  href: string;
  src: string;
}

interface CardProps {
  title: string;
  description: string;
  imageSRC: string;
  sourceURL: string;
  liveURL: string;
  picturesURL: string;
  tags: string[];
}

const MiddleBlock = ({ title, content, id, t }: MiddleBlockProps) => {  

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="30px" height="30px" />
      </a>
    );
  };

  const Card = ({ title, description, imageSRC, sourceURL, liveURL, picturesURL, tags }: CardProps) => {
    return (
    <CardContainer>
      {imageSRC && <CardThumbnail src={imageSRC} alt="Project" />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardTagsContainer>
          {tags.map((tag: string) => (
            <CardTag key={tag}>#{tag}</CardTag>
          ))}
        </CardTagsContainer>
        <CardButtonsContainer>
          {liveURL && <CardButton
            href={liveURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Live Demo")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-link"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </CardButton>}
          {sourceURL && <CardButton
            href={sourceURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Source Code")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </CardButton>}
          {picturesURL && <CardButton
            href={picturesURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Screenshots")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-camera"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </CardButton>}
        </CardButtonsContainer>
      </CardContent>
    </CardContainer>
    );
  };


  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up" triggerOnce={true}>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Row justify="space-around" align="top">
                <Card
                  title={t("Bootstrap4 Title")}
                  description={t("Bootstrap4 Description")}
                  imageSRC=""
                  sourceURL="https://github.com/josue-venegas/Bootstrap4"
                  liveURL=""
                  picturesURL=""
                  tags={["HTML", "Bootstrap4", "CSS", "SAAS"]}
                />
                <Card
                  title={t("AnalisisDisenoSoftware Title")}
                  description={t("AnalisisDisenoSoftware Description")}
                  imageSRC=""
                  sourceURL="https://github.com/josue-venegas/Analisis_y_diseno_de_software"
                  liveURL=""
                  picturesURL=""
                  tags={["ReactJS", "NodeJS", "MongoDB", "Express", "REST", "SCRUM"]}
                />
                <Card
                  title={t("DisenoInterfaces Title")}
                  description={t("DisenoInterfaces Description")}
                  imageSRC=""
                  sourceURL="https://github.com/josue-venegas/Diseno_de_interfaces_usuarias"
                  liveURL=""
                  picturesURL=""
                  tags={["ReactJS", "Tailwind CSS"]}
                />
                <Card
                  title={t("PruebasSoftware Title")}
                  description={t("PruebasSoftware Description")}
                  imageSRC=""
                  sourceURL="https://github.com/josue-venegas/Pruebas_de_software"
                  liveURL=""
                  picturesURL=""
                  tags={["Jenkins", "Karma", "JUnit", "Selenium"]}
                />
                <Card
                  title={t("BasesDatos Title")}
                  description={t("BasesDatos Description")}
                  imageSRC=""
                  sourceURL="https://github.com/josue-venegas/Bases_de_datos"
                  liveURL=""
                  picturesURL=""
                  tags={["Python", "PHP", "MysQL", "PostgreSQL", "OracleDB"]}
                />
                <Card
                  title={t("ShoppingApp Title")}
                  description={t("ShoppingApp Description")}
                  imageSRC=""
                  sourceURL="https://github.com/josue-venegas/Shopping"
                  liveURL=""
                  picturesURL=""
                  tags={["AngularJS", "GraphQL", "PrimeNG"]}
                />
                <Card
                  title={t("FrenchGrammar Title")}
                  description={t("FrenchGrammar Description")}
                  imageSRC=""
                  sourceURL="https://github.com/josue-venegas/frenchGrammar"
                  liveURL=""
                  picturesURL=""
                  tags={["ReactJS", "Bootstrap", "LLM", "SQLite", "REST"]}
                />
                <Card
                  title={t("FabLabWebsite Title")}
                  description={t("FabLabWebsite Description")}
                  imageSRC=""
                  sourceURL=""
                  liveURL=""
                  picturesURL="https://drive.google.com/drive/folders/17yPf9evZSCcr0Z_USotAscCVsNSAC70A?usp=sharing"
                  tags={["ReactJS", "Bootstrap", "AWS S3", "AWS Amplify", "AWS Cognito"]}
                />
                <Card
                  title={t("AndesDigital Title")}
                  description={t("AndesDigital Description")}
                  imageSRC=""
                  sourceURL=""
                  liveURL=""
                  picturesURL="https://drive.google.com/drive/folders/1RtVDqcf1B0rQBEgkupzgQrfXJblUryc3?usp=sharing"
                  tags={["AngularJS", "NodeJS", "MongoDB", "Express", "Keycloak", "Microsoft Azure", "REST", "SOAP", "SCRUM"]}
                />
                <Card
                  title={t("MEDS Title")}
                  description={t("MEDS Description")}
                  imageSRC=""
                  sourceURL=""
                  liveURL=""
                  picturesURL=""
                  tags={["AngularJS", "GraphQL", "NodeJS", "PrismaDB", "Microsoft Azure", "SCRUM"]}
                />
                <Card
                  title={t("CREATIS Title")}
                  description={t("CREATIS Description")}
                  imageSRC=""
                  sourceURL=""
                  liveURL=""
                  picturesURL=""
                  tags={["Docker", "ReactJS", "JEST", "OHIF", "Orthanc", "Girder"]}
                />
                <Card
                  title={t("GreekWiki Title")}
                  description={t("GreekWiki Description")}
                  imageSRC=""
                  sourceURL="https://github.com/Septanome/Projet_WS"
                  liveURL=""
                  picturesURL=""
                  tags={["ReactJS", "SparQL", "RDF"]}
                />
                <Card
                  title={t("AGIR Title")}
                  description={t("AGIR Description")}
                  imageSRC=""
                  sourceURL="https://github.com/swordfatih/AGIR"
                  liveURL=""
                  picturesURL=""
                  tags={["NextJS", "PrismaDB", "Tailwind CSS"]}
                />
              </Row>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
