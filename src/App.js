import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  // hooks
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredusers, setFilteredusers] = useState(users);

  // handlers
  const searchHandler = (event) => {
    return setSearchField(event.target.value.toLowerCase());
  };

  // use effects
  // console.log("firing effect");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((el) => setUsers(el));
  }, []);

  useEffect(() => {
    const newfilteredusers = users.filter((el) => {
      return el.name.toLowerCase().includes(searchField);
    });
    setFilteredusers(newfilteredusers);
  }, [users, searchField]);

  // jsx
  return (
    <div className="">
      <SearchBox searchHandler={searchHandler} />
      <CardList list={filteredusers} />
    </div>
  );
};

export default App;
