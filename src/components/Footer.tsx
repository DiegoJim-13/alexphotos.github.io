import styled from "@emotion/styled/macro";
import { BACKGROUND, PRIMARY, TERTIARY } from "../constants/colors";
import { StyledLink } from "./Nav";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const StyledFooter = styled.div`
  background-color: ${BACKGROUND};
  color: ${TERTIARY};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-top: 0.25rem;
  border: 0;
  border-top: 0.2rem;
  border-color: ${TERTIARY};
  border-style: double;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    color: ${TERTIARY};
  }
`;

const StyledButton = styled.button`
  margin-left: 0.25rem;
  padding: 0.1rem;
  color: ${TERTIARY};
  background-color: inherit;
  border: 0;
  &.enabled {
    text-decoration: underline;
    font-weight: 600;
    :hover {
      background-color: ${PRIMARY};
    }
  }
  &.disabled {
    border-radius: 1px;
  }
`;

const languages: Record<string, string> = {
  en: "english-lang",
  es: "spanish-lang",
};

function Footer() {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <StyledLink to="/">{t("home")}</StyledLink>

      {" | "}
      {t("language")}
      {Object.keys(languages).map((lang) => (
        <StyledButton
          type={"submit"}
          key={lang}
          onClick={() => {
            i18next.changeLanguage(lang);
          }}
          disabled={i18next.resolvedLanguage === lang}
          className={i18next.resolvedLanguage === lang ? "disabled" : "enabled"}
        >
          {t(languages[lang])}
        </StyledButton>
      ))}
    </StyledFooter>
  );
}

export default Footer;
