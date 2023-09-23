import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ latitude, longitude }) => {
    const mapStyles = {
      height: "50vh",
      width: "100%"
    };
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  
    return (
      <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={{ lat: latitude, lng: longitude }}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }


export default MapComponent;
