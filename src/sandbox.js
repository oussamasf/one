// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("")
//       .then((res) => res.json())
//       .then((results) => this.setState({ users: results }));
//   }

//   searchHandler(event) {
//     return this.setState({ searchField: event.target.value.toLowerCase() });
//   }
//   render() {
//     const filrerdUsers = this.state.users.filter((user) => {
//       return user.name.toLowerCase().includes(this.state.searchField);
//     });
//     return (
//       <div className="">
//         <input
//           type="search"
//           className=""
//           placeholder="search.."
//           onChange={this.searchHandler}
//         />
//         {filrerdUsers.map((el) => (
//           <h1 key={el.id}>{el.name}</h1>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

import { useState } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const searchHandler = (event) => {
    return setSearchField(event.target.value.toLowerCase());
  };
  const filteredusers = users.filter((el) => {
    return el.name.toLowerCase().includes(searchField);
  });
  return (
    <div className="">
      <input
        placeholder="search .. "
        type="search"
        className=""
        onChange={searchHandler}
      />
      {filteredusers.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  );
};

export default App;
