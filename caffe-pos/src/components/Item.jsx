import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

class Item extends Component {
  render() {
    return (
      <div
        className="card"
        onClick={() => {
          this.props.onClick();
        }}
      >
        <img className="card-img-top" src={this.props.src} alt={this.props.alt} />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.price} KM</p>
          <div>
            <p>
              Total amount:
              <span className="badge badge-info">{this.props.amount}</span>
            </p>
            <p>
              Total price:
              <span className="badge badge-info">
                {this.props.price * this.props.amount} KM
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
