import { Component } from "react";
import ToolBar from "./components/toolbar/toolbar.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: "",
      searchField: "",
    };
  }
  render() {
    return (
      <div>
        <p>ddd</p>
        <ToolBar />
      </div>
    );
  }
}

export default App;
