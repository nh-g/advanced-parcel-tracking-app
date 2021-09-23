// NPM package
import React from 'react'
import { Link, useParams } from 'react-router-dom';

// Project files
import ParcelInformation from '../components/ParcelInformation';
import Map from '../components/Map';

export default function ParcelDetail({ data }) {
    const { parcel_id} = useParams()

    const selectedParcel = data.find((item) => item.parcel_id === parcel_id)

    const {
        location_coordinate_latitude: latitude,
        location_coordinate_longitude: longitude,
        sender,
    } = selectedParcel || {};
    
    return (
      <section id="parcel-detail">
        {selectedParcel != null && selectedParcel != undefined ? (
          <>
            <header>
              <h1>Order from {sender}</h1>
              <p>You can find parcel information below</p>
            </header>

            <div className="columns">
              <Map
                coordinates={[latitude, longitude]}
                parcel={selectedParcel}
              />
              <ParcelInformation parcel={selectedParcel} />
            </div>
          </>
        ) : (
          <div>
            <h2> Not Found. </h2>
            <h4>⬅ Please Go back to the list of all parcels.</h4>
          </div>
        )}

        <footer className="footer">
          <Link className="button" to="/">
            Go back
          </Link>
        </footer>
      </section>
    );
}
