import logo from "../logo.svg";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const AppHeaderStyle = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogoStyle = css`
  width: 50%;
  pointer-events: none;
`;

function HomePage() {
  return (
    <div>
      <AppHeaderStyle>
        <img src={logo} className={AppLogoStyle} alt="logo" />
      </AppHeaderStyle>
    </div>
  );
}
export default HomePage;
