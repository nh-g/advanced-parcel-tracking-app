// NPM package
import React from 'react'
import { Link, useParams } from 'react-router-dom';

// Project files
import ParcelInformation from '../components/ParcelInformation';
import Map from '../components/Map';
export default function ParcelDetail({ data }) {
    console.log("detail page data", [data])

    const { parcel_id} = useParams()

    const selectedParcel = data.find((item) => item.parcel_id === parcel_id)

    const {
      location_coordinate_latitude: latitude,
      location_coordinate_longitude: longitude,
      sender,
    } = selectedParcel;

    return (
      <section id="parcel-detail">
        <header>
          <h1>Order from {sender}</h1>
          <p>You can find parcel information below</p>
        </header>

        <div className="columns">
          <Map coordinates={[latitude, longitude]} parcel={selectedParcel} />
          <ParcelInformation parcel={selectedParcel} />
        </div>

        <footer className="footer">
          <Link className="button" to="/">
            Go back
          </Link>
        </footer>
      </section>
    );
}
