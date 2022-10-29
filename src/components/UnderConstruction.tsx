import React from "react";

interface UnderConstructionProps {
  emoji: string;
}

class UnderConstruction extends React.Component<UnderConstructionProps> {
  render() {
    return (
      <h3>
        {this.props.emoji} Under Construction {this.props.emoji}
      </h3>
    );
  }
}
export default UnderConstruction;
