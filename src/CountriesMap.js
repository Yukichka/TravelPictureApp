import React from "react";

import { travel } from "./dataset";

import "./styles.css";

import { csvStringToJson } from "./csvStringToJson";

export class CountriesMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locationData: [0, 0], markers: "" };
  }
  componentDidMount() {
    fetch("/citiesinfo.csv")
      .then(resp => resp.text())
      .then(text => {
        // console.log("-got ", text);
        const jsonData = csvStringToJson(text);
        // console.log("--got: ", jsonData);

        const visitedCities = [];
        travel.forEach(countryObject => {
          const city = jsonData.find(e => e.country === countryObject.country);
          if (city !== undefined) visitedCities.push(city);
        });
        console.log("visitedCities", visitedCities);

        const coordinates = visitedCities.map(
          city => `${city.lat},${city.lng}`
        );
        console.log("coordinates", coordinates);

        const markersUrl = coordinates.join("%7C");
        this.setState({ markers: markersUrl });

        console.log("----got: ", travel[0].country);
        const filterData = jsonData.find(
          el => el.country === travel[0].country
        );
        console.log("---got: ", filterData[0]);
        const locationData = filterData
          ? [filterData.lat, filterData.lng]
          : [0, 0];
        console.log("-----got: ", locationData);
        this.setState({ locationData: locationData });
      });
  }

  render() {
    const APIKEY = "AIzaSyDpm9Z-4a-U-JeKY44oW9rVRjUoRe6tGz0";
    const coordinates = `${this.state.locationData[0]},${
      this.state.locationData[1]
    }`;
    if (coordinates === "0,0") {
      return <div className="comment">No map information is available</div>;
    }
    return (
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=Poland&markers=color:red|label:*|${
          this.state.markers
        }&zoom=2&size=610x500&key=${APIKEY}`}
        alt=""
      />
    );
  }
}
