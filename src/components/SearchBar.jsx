import {useState} from 'react'
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  // Local state
  const [query, setQuery] = useState("");

  // Properties
  const history = useHistory();
  
  // Methods
  function search(event) {
    event.preventDefault();
    history.push(`/search_results/${query}`);
  }
  console.log("search bar", [query])

  return (
    <div>
      <form onSubmit={search} className="search-bar">
        <input 
          type="text"
          id="sender-search"
          placeholder="  Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="search-box"
        />
      </form>
    </div>
  );
}
