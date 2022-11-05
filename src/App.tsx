import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import styled from "@emotion/styled";
import { TERTIARY } from "./constants/colors";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

const AppTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding-top: 0.5rem;
  font-size: 3rem;
  font-weight: 800;
  color: ${TERTIARY};
  * {
    color: ${TERTIARY};
  }
`;

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <AppTitle>{t("title")}</AppTitle>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
