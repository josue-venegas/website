import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
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

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <Col lg={3} md={3} sm={3} xs={3}>
              <NavLink to="/">
                <LogoContainer>
                  <SvgIcon
                    src="logo_black.svg"
                    aria-label="homepage"
                    width="145px"
                    height="92px"
                  />
                </LogoContainer>
              </NavLink>
            </Col>
            
            <Col lg={3} md={3} sm={3} xs={3}>
              <FooterContainer>
                <SocialLink
                    href="https://www.github.com/josue-venegas/"
                    src="github.svg"
                />
              </FooterContainer>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
              <FooterContainer>
                <SocialLink
                    href="https://www.linkedin.com/in/josue-venegas/"
                    src="linkedin.svg"
                />
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
