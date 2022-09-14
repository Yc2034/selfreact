import React, { useState } from "react";
import Accordion from "./components/Accordion";
import WikiSearch from "./components/WikiSearch";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import Musiclist from "./components/Musiclist";
import Calculator from "./components/Calculator";



const App = () => {

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={Musiclist} />
      </Route>
      <Route path="/list">
        <WikiSearch />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/calculate">
        <Calculator />
      </Route>
    </div>
  );
};
export default App;
