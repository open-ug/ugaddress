# OPEN UG ADDRESS

`ugaddress` package helps you access Districts for specific regions in Uganda.

## Installation

You can install `ugaddress` via npm. It can run in any environment and has no dependency.

```shell
npm install ugaddress
```

## Usage

`ugaddress` provides a set of utility functions to fetch interact with the __OPEN UG API__

### `getDistricts`

This function collects districts for a specific region. It accepts specifically 4 types of paramenters which are the four regions of Uganda:

- `"Northen"`
- `"Eastern"`
- `"Western"`
- `"Central"`

This function returns and array of districts For example:

```js
[
  { id: '27', name: 'Abim', region: 'Northern', population: '182,800' },
  //...... more districts here
]
```

> __Note:__ This function is asynchronous and returns a promise so use `await` or chain it using the `.then` function. The return type is an array of the districts.

> - The population is what was recorded in the 2014 population census. This will be updated in 2024.
> - Plans to add the population estimate of the current year are in progress

```js
import { getDistricts } from "ugaddress";

// When using async code
const districts = await getDistricts("Northen")
console.log(districts)

// When using synchronous code
getDistricts("Northern").then((districts) =>{
  console.log(districts)
})

// Output
[
  { id: '27', name: 'Abim', region: 'Northern', population: '182,800' },
  //...... more districts here
  { id: '9', name: 'Yumbe', region: 'Northern', population: '775,000' },
  { id: '4', name: 'Zombo', region: 'Northern', population: '306,100' }
]
```

## Non Javascript Applications

If for some reason you cant use the avascript package you can manually hit the API Endpoints

> This API endpoint is scheduled to change anytime soon

```txt
https://open-ug.github.io/ugaddress/regions/${region}.json`
```
