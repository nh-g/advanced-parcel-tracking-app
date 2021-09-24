// NPM Packages
import { useTranslation } from "react-i18next";

// Project files
import Card from "../components/Card";

export default function Home({ data }) {
  const {t} = useTranslation();

  const userGreeter = `${t("listView:heading1")} ${data[0].user_name}`;

  const CardArray = data.map((item) => {
    return <Card key={item.id} parcel={item} />;
  });
  return (
    <section id="home">
      <header>
        <h1> {userGreeter}</h1>
      </header>
      <h4 style={{ fontWeight: 300, letterSpacing: 0.5 }}>
        {t("listView:heading2")}
      </h4>
      <div className="list">{CardArray}</div>
    </section>
  );
}
