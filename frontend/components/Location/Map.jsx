// import React, { useState, useCallback } from 'react';
// import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import mapStyles from './MapStyles';

// const mapsApiKey = require('../../../config/keys').mapsApiKey;

// const mapContainerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: 50.087810,
//   lng: 14.420460
// };

// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true
// }

// export default function Map() {

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: mapsApiKey
//   })

//   if (loadError) return 'Error loading map';
//   if (!isLoaded) return 'Loading map';

//   return (
//     <div className="map-container">
//       <h1 className="map-header">Villa Richter</h1>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={14}
//         center={center}
//         options={options}
//         ></GoogleMap>
//     </div>
//   )
// };

// // const containerStyle = {
// //   width: '100%',
// //   height: '400px'
// // };

// // const center = {
// //   lat: 50.087810,
// //   lng: 14.420460
// // };

// // export default function Map() {

// //   const { isLoaded } = useJsApiLoader({
// //     id: 'google-map-script',
// //     googleMapsApiKey: mapsApiKey
// //   })

// //   const [map, setMap] = useState(null)

// //   const onLoad = useCallback(function callback(map) {
// //     const bounds = new window.google.maps.LatLngBounds();
// //     map.fitBounds(bounds);
// //     setMap(map)
// //   }, [])

// //   const onUnmount = useCallback(function callback(map) {
// //     setMap(null)
// //   }, [])

// //   return isLoaded ? (
// //     <GoogleMap
// //       mapContainerStyle={containerStyle}
// //       center={center}
// //       zoom={10}
// //       onLoad={onLoad}
// //       onUnmount={onUnmount}
// //     >
// //       { /* Child components, such as markers, info windows, etc. */}
// //       <></>
// //     </GoogleMap>
// //   ) : <></>
// // };

