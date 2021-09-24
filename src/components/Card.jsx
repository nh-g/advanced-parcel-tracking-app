// NPM package
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Project files
import FormattedTime from './FormattedTime';

export default function Card({parcel}) {
    const { t } = useTranslation();

    const {parcel_id, sender, status, eta} = parcel;
    const textParcel = `Parcel #${parcel_id}`

    return (
      <Link className="card" to={`/parcels/${parcel_id}`}>
        <div className="first-content">
          <p className="description">{sender}</p>
          <p className="description-small" style={{ color: "#FFA2A2" }}>
            {textParcel}
          </p>
          <p className="description-small">
            <span className="icon icon-stop-watch"> </span>
            <FormattedTime dateString={eta} />
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}></div>
        <div className="flexbox-expand-space" />

        <div className="middle-content">
          <span className={`icon icon-${status}`}></span>
          <p className="description-small">{status}</p>
        </div>

        <div style={{ marginBottom: "20px" }}></div>

        <div className="last-content">
          <span className="cta">{t("listView:item:view-detail")}</span>
          <span className="icon icon-chevron-right"></span>
        </div>
      </Link>
    );
}
