import React from "react";
import benny1 from "../photos/benny1.jpg";
import benny2 from "../photos/benny2.jpg";
import benny3 from "../photos/benny3.jpg";

interface DogsProps {}

class Dogs extends React.Component<DogsProps> {
  render() {
    return (
      <div>
        <img src={benny1} className="photo" alt={"benny1"} />
        <img src={benny2} className="photo" alt={"benny2"} />
        <img src={benny3} className="photo" alt={"benny3"} />
      </div>
    );
  }
}
export default Dogs;
