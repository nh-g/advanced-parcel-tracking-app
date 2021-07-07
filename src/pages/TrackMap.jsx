import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {Map as LeafletMap, Marker, Popup, TileLayer} from "react-leaflet"
import {icon} from "leaflet"

import mapPin from "../assets/images/map-pin.png"
import FormattedTime from '../components/FormattedTime'
export default function TrackMap({ data }) {
    console.log("track map page data", [data]);


  const [activePop, setActivePop] = useState(null);
  const zoomLevel = 1;
  const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;
  const myIcon = icon({ iconUrl: mapPin, iconSize: [36, 36] });

  return (
    <section id="track-map">

      <header>
        <h1>Track all your parcels</h1>
        <p>You can find each parcel information popup by clicking to the pin</p>
      </header>

      <div>
        <LeafletMap className="map" center={[0, 0]} zoom={zoomLevel}>
          <TileLayer url={mapURL} attribution={attribution} />
          {data.map((parcel) => (
            <Marker
              key={parcel.location_id}
              position={[
                parcel.location_coordinate_latitude,
                parcel.location_coordinate_longitude,
              ]}
              icon={myIcon}
              onClick={() => {
                setActivePop(parcel);
              }}
            />
          ))}

          {activePop && (
            <Popup
              position={[
                activePop.location_coordinate_latitude,
                activePop.location_coordinate_longitude,
              ]}
              onClose={() => {
                setActivePop(null);
              }}
            >
              <div>
                <h2>Located at {activePop.location_name}</h2>
                <p className="description">From {activePop.sender}</p>
                <p className="description-small">{activePop.status}</p>
                <p className="description-small">
                  Arriving at {<FormattedTime dateString={activePop.eta} />}
                </p>
              </div>
            </Popup>
          )}
        </LeafletMap>
      </div>

      <footer className="footer">
        <Link className="button" to="/">
          Go back
        </Link>
      </footer>
    </section>
  );
}
