import React, { Component } from "react";
import Items from "./Items"; // load up the information of Items

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
    return (
      <div>
        <ul>
          <li>{list}</li>
        </ul>
      </div>
    );
  }
}

export default App;
