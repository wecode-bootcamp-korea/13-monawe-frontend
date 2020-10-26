// import React, { Component } from "react";
// import MENUS from "./Navdata";
// import ContentType from "./MenuDropBox/ContentType";
// import MonawePet from "./MenuDropBox/MonawePet";
// import ListType from "./MenuDropBox/ListType";
// import "./Nav.scss";

// class Nav extends Component {
//   constructor() {
//     super();
//     this.state = {
//       menus: [],
//       hoveredIdx: "",
//       activePage: ""
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       menus: MENUS
//     });
//   }

//   handleMenuStyle = idx => {
//     this.setState({ hoveredIdx: idx });
//   };

//   handleDropBox = () => {
//     this.setState({ hoveredIdx: "" });
//   };

//   handleMyCurator = e => {
//     this.props.onMyCurator(e);
//   };

//   handleSearchBox = e => {
//     this.props.onSearchBox(e);
//   };

//   handleGoToPage = idx => {
//     this.setState({ activePage: idx });
//   };

//   render() {
//     const { menus, hoveredIdx } = this.state;
//     return (
//       <div className="Nav">
//         <div className={"navMenu"}>
//           <div className="menuTab">
//             <div>
//               <button className="fas fa-bars" />
//               <span>
//                 monawe<span>mall</span>
//               </span>
//             </div>
//             <ul className="menuLists">
//               {menus.map((menu, idx) => (
//                 <div
//                   key={idx}
//                   className="menu"
//                   onMouseOver={() => this.handleMenuStyle(idx)}
//                   // onClick={() => this.goToPage(idx)}
//                 >
//                   <small>{menu.koreanName}</small>
//                   <span>{menu.englishName}</span>
//                 </div>
//               ))}
//             </ul>
//           </div>
//           <div className="userInfo">
//             <div className="userName">
//               <span>
//                 모나위<span>님&nbsp;&nbsp;</span>
//               </span>
//               <button
//                 onClick={this.handleMyCurator}
//                 className="fas fa-plus-circle"
//               />
//             </div>
//             <div className="icons">
//               <button className="fas fa-shopping-bag" />
//               <button className="fas fa-user" />
//               <button
//                 className="fas fa-search"
//                 onClick={this.handleSearchBox}
//               />
//             </div>
//           </div>
//         </div>
//         <ContentType
//           categories={menus[0]?.categories}
//           className={
//             hoveredIdx === 0 ? "ContentType stationeryShown" : "ContentType"
//           }
//           onDropBox={this.handleDropBox}
//         />
//         <MonawePet
//           className={hoveredIdx === 1 ? "MonawePet shown" : "MonawePet"}
//           onDropBox={this.handleDropBox}
//         />
//         <ListType
//           subcategories={menus[2]?.subcategories}
//           className={hoveredIdx === 2 ? "ListType shown" : "ListType"}
//           onDropBox={this.handleDropBox}
//         />
//         <ListType
//           subcategories={menus[3]?.subcategories}
//           className={hoveredIdx === 3 ? "ListType shown" : "ListType"}
//           onDropBox={this.handleDropBox}
//         />
//         <ContentType
//           categories={menus[4]?.categories}
//           className={
//             hoveredIdx === 4 ? "ContentType storypickShown" : "ContentType"
//           }
//           onDropBox={this.handleDropBox}
//         />

//         <ListType
//           subcategories={menus[5]?.subcategories}
//           className={hoveredIdx === 5 ? "ListType shown" : "ListType"}
//           onDropBox={this.handleDropBox}
//         />
//       </div>
//     );
//   }
// }

// export default Nav;
