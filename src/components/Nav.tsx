import React from "react";
import { Link } from "react-router-dom";

interface NavProps {}

class Nav extends React.Component<NavProps> {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/portfolio">Portfolio</Link>
        {" | "}
        <Link to="/portfolio/dogs">Dogs</Link>
      </div>
    );
  }
}
export default Nav;
