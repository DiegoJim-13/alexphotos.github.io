import styled from "@emotion/styled";

const StyledImage = styled.img`
  max-width: 100%;
`;

function Dogs() {
  return (
    <div>
      <StyledImage
        src={"https://i.imgur.com/uF4sPDT.jpeg"}
        className="photo"
        alt={"benny1"}
      />
      <StyledImage
        src={"https://i.imgur.com/bZFOzCN.jpg"}
        className="photo"
        alt={"benny2"}
      />
      <StyledImage
        src={"https://i.imgur.com/GbTFIME.jpg"}
        className="photo"
        alt={"benny3"}
      />
    </div>
  );
}
export default Dogs;
