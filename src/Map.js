import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { csvStringToJson } from "./csvStringToJson";

export class Map extends React.Component {
  constructor(props){
      super(props);
      this.state = {locationData:[0, 0]}
  }
  componentDidMount() {
    fetch("/citiesinfo.csv")
      .then(resp => resp.text())
      .then(text => {
        console.log("-got ", text);
        const jsonData = csvStringToJson(text);
        console.log("--got: ", jsonData);
        console.log(this.props.cityId)
        const filterData = jsonData.find(el => el.id === this.props.cityId);
        console.log("---got: ", filterData);
        const locationData = filterData ? [filterData.lat, filterData.lng] : [0, 0]
        console.log("-----got: ", locationData)
        this.setState({locationData: locationData}) 
      });
  }

  render() {
      const APIKEY='AIzaSyDpm9Z-4a-U-JeKY44oW9rVRjUoRe6tGz0'
      const coordinates = `${this.state.locationData[0]},${this.state.locationData[1]}`
      if (coordinates === '0,0') {
          return <div>No map information is available</div>
      }
      return <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates}&markers=color:red|label:*|${coordinates}&zoom=6&size=800x400&key=${APIKEY}`}></img>
    return <div />;
  }
}