import React, { Component } from "react";
import Item from "./Item.jsx";
import Total from "./Total.jsx";
import "bootstrap/dist/css/bootstrap.css";

class Items extends Component {
  state = {
    items: [
      {
        id: 0,
        name: "coffe",
        price: 1.5,
        src: "./img/espresso.jpg",
        alt: "Cup of coffee",
        type: "hot-drinks",
        amount: 0
      },
      {
        id: 1,
        name: "tea",
        price: 1.5,
        src: "./img/tea.jpg",
        alt: "Cup of tea",
        type: "hot-drinks",
        amount: 0
      },
      {
        id: 2,
        name: "beer",
        price: 2.5,
        src: "./img/beer.jpg",
        alt: "Pint of beer",
        type: "beer",
        amount: 0
      },
      {
        id: 3,
        name: "dark beer",
        price: 3.0,
        src: "./img/dark-beer.jpg",
        alt: "Glass of dark beer",
        type: "beer",
        amount: 0
      }
    ],
    total: 0,
    id: 0,
    price: 0
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(price, name, id) {
    let newState = this.state;
    newState.items[id].amount = this.state.items[id].amount + 1;
    function total() {
      let total = 0;
      for (let i = 0; i < newState.items.length; i++) {
        total = total + newState.items[i].price * newState.items[i].amount;
      }
      return total;
    }
    newState.total = total();
    newState.id = id;
    newState.price = this.state.items[id].price * this.state.items[id].amount;
    this.setState({ state: this.newState });
  }
  render() {
    const HotDrinks = this.state.items.filter(item => item.type === "hot-drinks");
    const Beer = this.state.items.filter(item => item.type === "beer");
    return (
      <div className="row">
        <ul className="container col-9">
          <p className="bg-primary text-white mt-2 mb-0 pl-2">Hot Drinks</p>
          <div className="row">
            {HotDrinks.map(HotDrinks => (
              <li className="col-6 list-group-item" key={HotDrinks.id}>
                <Item
                  onClick={() => {
                    this.handleClick(HotDrinks.price, HotDrinks.name, HotDrinks.id);
                  }}
                  name={HotDrinks.name}
                  price={HotDrinks.price}
                  amount={HotDrinks.amount}
                  src={HotDrinks.src}
                  alt={HotDrinks.alt}
                />
              </li>
            ))}
          </div>
          <p className="bg-primary text-white mt-2 mb-0 pl-2">Beer</p>
          <div open className="row">
            {Beer.map(Beer => (
              <li className="col-6 list-group-item" key={Beer.id}>
                <Item
                  onClick={() => this.handleClick(Beer.price, Beer.name, Beer.id)}
                  name={Beer.name}
                  price={Beer.price}
                  amount={Beer.amount}
                  src={Beer.src}
                  alt={Beer.alt}
                />
              </li>
            ))}
          </div>
        </ul>
        <div className="col-3">
          <p className="bg-info text-white mb-0 mt-2 pl-2">Order:</p>
          <ul className="list-group">
            {this.state.items.map(items => (
              <Total
                key={this.state.items[items.id].id}
                id={this.state.items[items.id].id}
                name={this.state.items[items.id].name}
                amount={this.state.items[items.id].amount}
                price={this.state.items[items.id].price}
                total={
                  this.state.items[items.id].price * this.state.items[items.id].amount
                }
              />
            ))}
          </ul>
          <div className="bg-primary text-white text-right mt-2 pr-2">
            Total: {this.state.total}KM
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
