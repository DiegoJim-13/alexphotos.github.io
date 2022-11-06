import styled from "@emotion/styled/macro";

const StyledImage = styled.img`
  min-width: 200px;
  min-height: 200px;
  max-width: 400px;
  max-height: 400px;
  position: relative;
  animation: 6s moving linear infinite;
  display: block;
  @keyframes moving {
    from {
      transform: translateX(-100vw);
    }
    to {
      transform: translateX(200vw);
    }
  }
  box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.5);
`;
// https://codepen.io/hexagoncircle/pen/povGMod?editors=1100

function Nature() {
  return <div>Nature</div>;
}
export default Nature;
