// NPM packages
import {useState} from 'react'
import { icon } from 'leaflet'
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet'

// Project files
import mapPin from '../assets/images/map-pin.png'
export default function Map({ coordinates, parcel }) {
  const [activePop, setActivePop] = useState(null)
  const zoomLevel = 10;
  const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;
  const myIcon = icon({ iconUrl: mapPin, iconSize: [36, 36] });
    
    return (
      <LeafletMap className="map" center={coordinates} zoom={zoomLevel}>
        <TileLayer url={mapURL} attribution={attribution} />
        <Marker
          position={coordinates}
          icon={myIcon}
          onClick={() => {
            setActivePop(parcel);
          }}
        />
        {activePop && (
          <Popup
            position={coordinates}
            onClose={() => {
              setActivePop(null);
            }}
          >
            <div>
              <h2>{parcel.location_name}</h2>
              <p className="description">{parcel.sender}</p>
              <p className="description-small">{parcel.status}</p>
            </div>
          </Popup>
        )}
      </LeafletMap>
    );
}
