import React,{useState} from 'react'
import { useHistory } from "react-router-dom";

export default function SearchBar({data}) {
  // Local state
  const [query, setQuery] = useState("");
  // Constants
  const history = useHistory();
//   const search_logo = <img src="https://img.icons8.com/ios/30/000000/search--v3.png" />


  // Methods
  function search(event) {
    event.preventDefault();
    history.push(`/search_results/${query}`);
  }

  return (
    <div>
      <form onSubmit={search} className="search-bar">
        {/* {search_logo} */}
        <input 
          type="text"
          id="sender-search"
          placeholder="Search  "
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="search-box"
        />
      </form>
    </div>
  );
}
