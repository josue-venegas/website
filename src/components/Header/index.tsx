import { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import i18n from "../../translation";
import { LanguageSwitch, LanguageSwitchContainer } from "../Footer/styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <Row>
          <Col lg={0} md={4} sm={4} xs={4}>
            <CustomNavLinkSmall>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("es")}>
                <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="40px"
                    height="40px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("en")}>
                <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="40px"
                    height="40px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("fr")}>
                <SvgIcon
                    src="france.svg"
                    aria-label="homepage"
                    width="40px"
                    height="40px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </CustomNavLinkSmall>
          </Col>
        </Row>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About Title")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("projects")}>
          <Span>{t("Projects Title")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact Title")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection style={{"backgroundColor":  scrollY > 50 ? "#252525" : "transparent"}}>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo_white.svg" width="145px" height="92px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Col lg={3} md={0} sm={0} xs={0}>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("fr")}>
                  <SvgIcon
                    src="france.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>                
              </LanguageSwitchContainer>
            </Col>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>{t("Menu")}</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
