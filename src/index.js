/** 
* Get All districts for a specific region
* @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
* @param {"Northern" | "Central" | "Western" | "Eastern"} region - Region that you want to get the districts for.
* @return {Array} An Array of districts for the region.
*/
async function getDistricts(region) {
  // check if region is among accepted reions
  if (["Northern", "Central", "Western", "Eastern"].includes(region)) {
    // get the districts for the region
    const response = await fetch(`https://open-ug.github.io/ugaddress/regions/${region}.json`);
    const data = await response.json();
    return data;
  } else {
    // throw an error
    throw new Error("Invalid region provided. Region must be one of: Northern, Central, Western, Eastern");
  }

}

const ugaddress = { getDistricts }

export default ugaddress;