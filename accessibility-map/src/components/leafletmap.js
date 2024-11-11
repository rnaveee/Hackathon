import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaftletmap.css';

const LeafletMap = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([49.26, -123.05], 13);  // Initial map center and zoom level

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Marker data array
    const markers = [
      {
        lat: 49.2800585,
        lng: -123.1156075,
        popupContent: "<b>Vancouver Public Library (V6B 6B1)</b><br>Rating: 5/5.<br><i>Accessibility Features:</i><br>Wheelchair Ramp<br>Elevator<br>Public bathroom<br>Escalator"
      },
      {
        lat: 49.261255,
        lng: -123.118448,
        popupContent: "<b>Vancouver General Hospital (V5Z 1M9)</b><br>Rating: 4/5.<br><i>Accessibility Features:</i><br>Wheelchair Ramp<br>Public bathroom"
      },
      {
        lat: 49.279522, 
        lng: -123.115245,
        popupContent: "<b>BC Place Stadium (V6B 4Y8)</b><br>Rating: 4/5.<br><i>Accessibility Features:</i><br>Wheelchair Ramp<br>Elevator<br>Public bathroom"
      },
      {
        lat: 49.2827,
        lng: -123.1207,
        popupContent: "<b>Science World (V6A 4C2)</b><br>Rating: 4/5.<br><i>Accessibility Features:</i><br>Wheelchair Ramp<br>Elevator"
      },
      {
        lat: 49.2828,
        lng: -123.1165,
        popupContent: "<b>Vancouver Aquarium (V6G 3E2)</b><br>Rating: 5/5.<br><i>Accessibility Features:</i><br>Wheelchair Ramp<br>Elevator<br>Public bathroom"
      },
      // Add other markers here
    ];

    // Loop through markers array and add each marker to the map
    markers.forEach((markerData) => {
      const marker = L.marker([markerData.lat, markerData.lng]).addTo(map);
      marker.bindPopup(markerData.popupContent);
    });

    // Add custom Stadia layer
    const Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
      minZoom: 0,
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ext: 'png'
    });

    Stadia_OSMBright.addTo(map);

    // Cleanup function to remove map on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '90%' }}></div>;
};

export default LeafletMap;
