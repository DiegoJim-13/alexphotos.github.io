import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
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

const StyledLink = styled(Link)`
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
    color: black;
  }
`;

const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        {" | "}
        <StyledLink to="/about">About</StyledLink>
        {" | "}
        <Dropdown>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <DropdownContent>
            <DropdownItem>
              <StyledLink to="/portfolio/dogs">Dogs</StyledLink>
            </DropdownItem>
            <DropdownItem>
              <StyledLink to="/portfolio/nature">Nature</StyledLink>
            </DropdownItem>
            <DropdownItem>
              <StyledLink to="/portfolio/weddings">Weddings</StyledLink>
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </StyledNav>
    );
  }
}
export default Nav;
