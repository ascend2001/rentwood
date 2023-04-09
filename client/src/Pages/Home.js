import React, { useState, useEffect } from 'react';
import Map from '../Components/Map';
import * as api from '../api';

function Home() {
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    async function loadLocations() {
      try {
        const { data } = await api.getAllLocations();
        let locations = data.filter((element) => 'Latitude' in element.fields && 'Longitude' in element.fields);

        locations = locations.map((
          (element) => ({ lat: element.fields.Latitude, lng: element.fields.Longitude })));

        setAllLocations(locations);
      } catch (error) {
        console.error(error);
      }
      // const coordinates = await Promise.all(geocodes.map((gcode)=>getLatLng(gcode[0])));
    }
    loadLocations();
  }, []);

  return (
    <div>
      <h1> Home Page </h1>
      <Map apartments={allLocations} />
    </div>
  );
}

export default Home;
