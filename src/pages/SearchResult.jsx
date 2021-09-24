// NPM packages
import { Link, useParams } from "react-router-dom";

// Project files
import Card from "../components/Card";
import ButtonGoBack from "../components/ButtonGoBack";
export default function SearchResult({ match, data }) {
  const { query } = useParams();

  const searchResults = data.filter(
    (item) =>
      item.sender.toUpperCase().includes(query.toUpperCase()) ||
      item.parcel_id.toUpperCase().includes(query.toUpperCase())
  );

  const parcels = searchResults.map((item, index) => (
    <Card key={index} parcel={item} />
  ));

  return (
    <div id="results" className="container">
      <header>
        <h2>
          We found {searchResults.length} parcels that matched you search"
          {query}"
        </h2>
      </header>

      <div className="list">
        {searchResults.length > 0 ? (
          parcels
        ) : (
          <p>No results found. Please try another search query.</p>
        )}
      </div>

      <footer className="footer">
        <ButtonGoBack />
      </footer>
    </div>
  );
}
