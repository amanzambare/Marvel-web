import React from "react";
// import {Link} from  'react-router-dom';
import Navb from "./component/Navbar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Cards from "./component/card"
import Card2 from "./component/card2"
import Card3 from "./component/card3";
import Card4 from "./component/card4";
import Card from "./component/card";
import Card5 from "./component/card5";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Navb/>   
      <Cards/>
      <Card2/>
      <Card4/>
      <Card3/>
      <Card5/>
      <Footer/>
      {/* <Cards/> */}
       </>
  );
}

export default App;
