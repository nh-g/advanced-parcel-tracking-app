// NPM packages
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import Card from "../components/Card";
import ButtonGoBack from "../components/ButtonGoBack";
export default function SearchResult({ data }) {
  const { t } = useTranslation();

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
          {t("search:search-result:heading")} {searchResults.length}{" "}
          {t("search:search-result:succeeded")} "{query}"
        </h2>
      </header>

      <div className="list">
        {searchResults.length > 0 ? (
          parcels
        ) : (
          <p>{t("search:search-result:failed")}</p>
        )}
      </div>

      <footer className="footer">
        <ButtonGoBack />
      </footer>
    </div>
  );
}
