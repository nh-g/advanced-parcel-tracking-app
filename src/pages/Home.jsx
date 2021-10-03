// NPM Packages
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

// Project files
import Card from "../components/Card";
import SortControls from "../components/SortControl";

export default function Home({ data }) {

  const [list, setList] = useState(data);
  useEffect(() => {
    setList(data)
  }, [data])

  const {t} = useTranslation();

  const userGreeter = `${t("listView:heading1")} ${list[0].user_name}`;

  const CardArray = list.map((item) => {
    return <Card key={item.id} parcel={item} />;
  });
  return (
    <section id="home">
      <header>
        <h1> {userGreeter}</h1>
      </header>
      <div className="heading">
        <h4 style={{ fontWeight: 300, letterSpacing: 0.5 }}>
          {t("listView:heading2")}
        </h4>
        <SortControls list={list} setList={setList} />
      </div>
      <div className="list">{CardArray}</div>
    </section>
  );
}
