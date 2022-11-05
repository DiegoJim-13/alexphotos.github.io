import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import styled from "@emotion/styled";
import { TERTIARY } from "./constants/colors";

const AppTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0.5rem 0 0.5rem 0;
  font-size: 3rem;
  font-weight: 800;
  color: ${TERTIARY};
`;

function App() {
  return (
    <div>
      <AppTitle>Alex's Photos!</AppTitle>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
