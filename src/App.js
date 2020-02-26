import React, { Component } from "react";
import Items from "./Items"; // load up the information of Items
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      filter: [],
      search: "" // keyword
    };
  }

  componentDidMount() {}

  onSearch() {
    // keyword
  }

  onFilter() {
    // filters
  }

  findFilter() {}

  findItem() {}

  alreadyIn() {}

  clearAll() {}

  render() {
    const list = [];
    for (const item in Items) {
      list.push(Items[item].name);
    }
    return <div className="background-blue white-text">{list}</div>;
  }
}

export default App;
