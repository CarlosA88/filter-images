import React, { Component } from "react";
import Items from "./api/Items"; // load up the information of Items
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
    // const list = [];
    // for (const item in Items) {
    //   list.push(Items[item].name);
    // }
    return <div className="background-blue white-text">
      <ul>
      {Items.map(item=>(
       <li key={item.key}>{item.name}</li>
      ))}
    </ul></div>;
  }
}

export default App;
