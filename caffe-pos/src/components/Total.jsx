import React, { Component } from "react";
class Total extends Component {
  empty() {
    if (this.props.amount === 0) {
      return null;
    } else {
      return (
        <div>
          <li className="list-group-item" key={this.props.id}>
            {this.props.name} x {this.props.amount} Price: {this.props.price}KM Total:
            {this.props.total}KM
          </li>
        </div>
      );
    }
  }
  render() {
    return this.empty();
  }
}

export default Total;
