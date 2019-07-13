import React from "react";
import { render } from "react-dom";
import { travel } from "./dataset";
import { Country } from "./Country";

export class TravelTimeline extends React.Component {
  prepareDates() {
    var dates = [];
    travel.forEach(country => {
      country.cities.forEach(city => {
        console.log("city", city);
        city.dates.forEach(date => {
          if (date.length) {
            dates.push({ city: city, date: date });
          }
        });
      });
    });
    console.log("dates", dates);
  }

  render() {
    this.prepareDates();
    return <div />;
  }
}
