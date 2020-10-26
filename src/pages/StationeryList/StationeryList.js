import React, { Component } from "react";
import ProductList from "../components/ProductList/ProductList";
import ProductListNav from "../components/ProductListNav/ProductListNav";
import Paging from "../components/ProductList/Paging/Paging";

export default class StationeryList extends Component {
  render() {
    return (
      <div>
        <ProductListNav />
        <ProductList />
        <Paging />
      </div>
    );
  }
}
