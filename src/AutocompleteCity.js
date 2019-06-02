import Autocomplete from "react-autocomplete";
import { travel } from "./dataset";
import React from "react";

const dsList = [];
travel.forEach(country => {
  // console.log(country);
  country.cities.forEach(city => {
    // console.log(city.name, city.id);
    dsList.push({
      id: city.id,
      label: city.name,
      url: `/travel/${country.id}/${city.id}`
    });
  });
});
// console.log(dsList);

export class AutocompleteCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <div>
        <Autocomplete
          inputProps={{ placeholder: "Search city" }}
          placeholder="Search city"
          items={dsList}
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={item => item.label}
          renderItem={(item, highlighted) => (
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
            >
              {item.label}
            </div>
          )}
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={value => this.setState({ value })}
        />
      </div>
    );
  }
}
