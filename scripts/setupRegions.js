import fs from "fs/promises"
import chalk, { Chalk } from 'chalk';

const log = console.log;




const northernRegionFile = "./data/north.txt";
const centralRegionFile = "./data/central.txt";
const easternRegionFile = "./data/east.txt";
const westernRegionFile = "./data/west.txt";

const regionFiles = [
  {
    name: "Northern",
    file: northernRegionFile
  },
  {
    name: "Central",
    file: centralRegionFile
  },
  {
    name: "Eastern",
    file: easternRegionFile,
  },
  {
    name: "Western",
    file: westernRegionFile
  }
]

const setupRegions = async () => {
  try {
    for (const region of regionFiles) {
      const regionDistricts = []
      const data = await fs.readFile(region.file, "utf-8")
      // Split the data into an array
      const dataArr = data.split("\n")
      for (const line of dataArr) {

        const lineArr = line.split("\t");

        const district = {
          id: lineArr[0],
          name: lineArr[1],
          region: region.name,
          population: lineArr[3],
          populationEstimate: lineArr[4]
        }
        // Push the object into the array
        regionDistricts.push(district)



      }

      const regionJSON = JSON.stringify(regionDistricts)
      const regionFile = `./output/regions/${region.name}.json`


      // check if regionFile path exists
      const regionFileExists = await fs.access(regionFile).then(() => true).catch(() => false)
      // if exists re-write the file
      if (regionFileExists) {
        await fs.writeFile(regionFile, regionJSON)
      } else {
        // if not create the file
        await fs.writeFile(regionFile, regionJSON)
      }

      log(
        "Finished writing" + chalk.green(region.name) + " to " + chalk.underline.gray(regionFile) + "\n"
      )

    }
  } catch (error) {
    console.log(error)
  }
}

setupRegions()

export default setupRegions;