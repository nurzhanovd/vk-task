import React from "react";

export class Droppable extends React.Component {
  // drop = (e) => {
  //   e.preventDefail();
  //   const data = e.dataTransfer.getData('transfer')
  //   e.target.appendCh
  // }

  render() {
    return (
      <div
        onDragEnter={(e) => {
          console.log('onDragEnter')
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
