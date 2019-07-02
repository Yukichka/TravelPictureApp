export function csvStringToJson(str) {
    const allRows = str.split("\r\n");
    if (allRows.length <= 1) return [];
  
    return allRows.map(line => {
      const parts = line.split(",");
      let city = parts[0],
        lat = parts[1],
        lng = parts[2],
        country = parts[3],
        id = parts[3].toLowerCase().replace(/[^\w]/g,'') + "-" + parts[0].toLowerCase().replace(/[^\w]/g,'');
      return {
        city: city,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        country: country,
        id: id
      };
    });
  }
  