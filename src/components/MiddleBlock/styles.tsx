import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const Title = styled("p")`
  padding: 1rem 0 0 0;
  margin-bottom: -0.1rem;
  font-size: 20px;
  font-weight: bold;
`;

export const Subtitle = styled("p")`
  font-size: 18px;
`;

export const ContentWrapper = styled("div")`
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-bottom: 20px;
`;

export const CardThumbnail = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #000;
  text-align: justify;
  margin-bottom: 16px;
`;

export const CardTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const CardTag = styled.span`
  display: inline-block;
  background-color: #e4e4e4;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #212121;
  border-radius: 9999px;
`;

export const CardButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CardButton = styled.a`
  width: 120px;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
    background-color: #cb6ce6;
    color: #fff;
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
    background-color: #cb6ce6;
    color: #fff;
  }

  svg {
    margin-left: 4px;
    vertical-align: middle;
  }
`;
