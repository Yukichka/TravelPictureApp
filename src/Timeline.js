import React from "react";
import { render } from "react-dom";
import { travel } from "./dataset";
import { Country } from "./Country";

import "./timelineStyle.css";

export class Timeline extends React.Component {
  prepareDates() {
    var dates = [];
    travel.forEach(country => {
      country.cities.forEach(city => {
        city.dates.forEach(date => {
          if (date.length) {
            dates.push({
              city: city,
              date: date,
              timestamp: this.stringDateToTimestamp(date)
            });
          }
        });
      });
    });
    // console.log("dates", dates);
    return dates;
  }

  stringDateToTimestamp(stringDate) {
    var arr = stringDate.split(".");
    return new Date(arr[2], arr[1] - 1, arr[0]).getTime();
  }

  render() {
    const citiesByDate = this.prepareDates();
    citiesByDate.sort(function(a, b) {
      return b.timestamp - a.timestamp;
    });

    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                {citiesByDate.map((el, idx) => {
                  return (
                    <div className="timeline" key={idx}>
                      <div className="icon" />
                      <div className="date-content">
                        <div className="date-outer">
                          <span className="date">
                            <span className="month">{el.date}</span>
                            <span className="year">{el.city.name}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}