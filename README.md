# OPEN UG ADDRESS

`ugaddress` package helps you access Districts for specific regions in Uganda.

## Installation

You can install `ugaddress` via npm. I can run in any environment and has no dependency.

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

> __Note:__ This function is asynchronous and returns a promise so use `await` or chain it using the `.then` function. The return type is an array of the districts.

```js
import { getDistricts } from "ugaddress";

// When using async code
const districts = await getDistricts("Northen")
console.log(districts)

// When using synchronous code
getDistricts("Northern").then((districts) =>{
  // Do something
})
```

