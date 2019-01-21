import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import Items from "./components/Items.jsx";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <main id="app">
        <nav>
          <Nav />
        </nav>
        <div>
          <Items />
        </div>
      </main>
    );
  }
}

export default App;
