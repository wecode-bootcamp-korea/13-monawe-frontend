sortDatas = e => {
    e.productListsort();
    const { productDatas } = this.state;
    const { value } = e.target;
    const priceObj = {
      "낮은 금액 순": "product_detail__price",
      "높은 금액 순": "product_detail__price",
      "인기 순": "star_average",
      "신상품 순": "created"
    };
    let newData = productDatas.sort((a, b) => {
      if (value === "낮은 금액 순") {
        return a[priceObj[value]] - b[priceObj[value]];
      } else if (value === "신상품 순") {
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      }
      return b[priceObj[value]] - a[priceObj[value]];
    });
  };

    this.setState({
      isClicked: false,
      curCategorValue: value,
      productDatas: newData
    });
  };
