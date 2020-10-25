import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      productDatas: [],
      filteredProductDatas: [],
      currentSearchWord: "",
      searchWords: [],
      isSearchResult: false,
      thumbnailData: {}
    };
  }

  componentDidMount() {
    fetch("/data/list.json")
      .then(res => res.json())
      .then(res => {
        this.setState({ productDatas: res.data });
      });
  }

  handleSearchBox = e => {
    this.props.onSearchBox(e);
  };

  handleSearchWord = e => {
    const currentSearchWord = e.target.value;
    this.setState({
      currentSearchWord,
      filteredProductDatas: this.state.productDatas.filter(data =>
        data.name.includes(currentSearchWord)
      )
    });
  };

  handleSearchHistory = e => {
    e.preventDefault();
    const currentWord = this.state.currentSearchWord;
    const searchWords = [
      ...this.state.searchWords,
      { word: currentWord, date: Date.now() }
    ];

    if (currentWord.length < 2) {
      return alert("검색어는 2글자 이상 입력하여야 합니다.");
    } else {
      this.setState({
        currentSearchWord: "",
        searchWords
      });
    }
  };

  handleDelete = searchWord => {
    const searchWords = this.state.searchWords.filter(
      word => searchWord.date !== word.date
    );
    this.setState({
      searchWords
    });
  };

  handleDeleteAll = () => {
    this.setState({ searchWords: [] });
  };

  handleThumbnail = data => {
    this.setState({ thumbnailData: data });
  };

  render() {
    const {
      filteredProductDatas,
      currentSearchWord,
      searchWords,
      thumbnailData
    } = this.state;

    const { isSearchBox } = this.props;

    return (
      <div className={isSearchBox ? "SearchBox" : "SearchBox hidden"}>
        <form className="searchInput" onSubmit={this.handleSearchHistory}>
          <input
            type="
        text"
            placeholder="  검색어를 입력하세요."
            value={currentSearchWord}
            onChange={this.handleSearchWord}
          />
          <button className="fas fa-search"></button>
        </form>
        <div className={currentSearchWord ? "search inactive" : "search "}>
          <div className="searchWords">
            <div>
              <h4>추천 검색어</h4>
              <ul>
                {RECOMMENDS.map((recommend, idx) => (
                  <li key={idx}>{recommend}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>최근 검색어</h4>
              <div className="latestSearchWords">
                <div>
                  <ul>
                    {searchWords.map((searchWord, idx) => (
                      <li key={searchWord.date}>
                        <span>{searchWord.word}</span>
                        <button
                          className="fas fa-times"
                          onClick={() => this.handleDelete(searchWord)}
                        ></button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="btnContainer">
                  <button onClick={this.handleDeleteAll}>전체삭제</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            currentSearchWord ? "searchResults" : "searchResults inactive"
          }
        >
          {filteredProductDatas.length === 0 ? (
            <span className="noneSearch">검색 결과가 없습니다.</span>
          ) : thumbnailData.name !== undefined ? (
            <div className="productThumbnail">
              <img
                src={thumbnailData?.imageUrl}
                alt={thumbnailData?.subcategoryName}
              />
              <span>{thumbnailData?.name}</span>
              <span>
                <em>{thumbnailData?.price}</em>원
              </span>
            </div>
          ) : (
            <div className="productThumbnail">
              <img
                src={filteredProductDatas[0]?.imageUrl}
                alt={filteredProductDatas[0]?.subcategoryName}
              />
              <span>{filteredProductDatas[0]?.name}</span>
              <span>
                <em>{filteredProductDatas[0]?.price}</em>원
              </span>
            </div>
          )}
          <ul>
            {filteredProductDatas.map(data => (
              <li key={data.id} onMouseOver={() => this.handleThumbnail(data)}>
                {data.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="recommendTags ">
          <h3>추천 태그</h3>
          <div>
            <ul>
              {TAGS.map((tag, idx) => (
                <li key={idx}>{"#" + tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className="closeBtn fas fa-times"
          onClick={this.handleSearchBox}
        ></button>
      </div>
    );
  }
}

const TAGS = [
  "패브릭파카",
  "마이너스펜",
  "강아지는귀여워",
  "with.wecode",
  "습식싸인펜",
  "13기화이팅"
];

const RECOMMENDS = [
  "404 네온",
  "404 파스텔",
  "FX200",
  "모나위펫클리너",
  "선만년필",
  "모나위화이팅",
  "MONAWEPRJ",
  "Wecode",
  "국민볼펜",
  "13기화이팅"
];

export default SearchBox;
