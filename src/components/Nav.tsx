import styled from "@emotion/styled/macro";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PRIMARY, SECONDARY, TERTIARY } from "../constants/colors";

const StyledNav = styled.div`
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border: 0;
  border-bottom: 0.2rem;
  border-color: ${TERTIARY};
  border-style: double;
`;

export const StyledLink = styled(Link)`
  padding: 0.25rem;
  color: ${TERTIARY};
  font-weight: 600;
  :hover {
    background-color: ${PRIMARY};
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  overflow: auto;
`;

const DropdownItem = styled.div`
  white-space: nowrap;
  padding: 0.25rem;
  text-align: left;
  background-color: ${SECONDARY};
  :hover {
    background-color: ${PRIMARY};
  }
`;

const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

function Nav() {
  const { t } = useTranslation();

  return (
    <StyledNav>
      <StyledLink to="/">{t("home")}</StyledLink>
      {" | "}
      <StyledLink to="/about">{t("about")}</StyledLink>
      {" | "}
      <Dropdown>
        <StyledLink to="/portfolio">{t("portfolio")}</StyledLink>
        <DropdownContent>
          <DropdownItem>
            <StyledLink to="/portfolio/dogs">{t("dogs")}</StyledLink>
          </DropdownItem>
          <DropdownItem>
            <StyledLink to="/portfolio/nature">{t("nature")}</StyledLink>
          </DropdownItem>
          <DropdownItem>
            <StyledLink to="/portfolio/weddings">{t("weddings")}</StyledLink>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </StyledNav>
  );
}

export default Nav;
