import React, { Component } from "react";
import ProductList from "../components/ProductList/ProductList";
import ProductListNav from "../components/ProductListNav/ProductListNav";

export default class StationeryList extends Component {
  render() {
    return (
      <div>
        <ProductListNav />
        <ProductList />
      </div>
    );
  }
}
