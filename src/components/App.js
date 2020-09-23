import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import HomePage from "./Homepage";
import ProductDetail from "./ProductDetail";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/ProductDetail/:id" component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
