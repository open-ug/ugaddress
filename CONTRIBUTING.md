# Contributing guidelines

The following document will take you through how to setup this repo on your local machine and contribute.

## Workflow

This is a brief explanation on what steps are taken to generate the final JSON API and NPM package.

- Raw location data is added to the `data` directory in a well defined format.(eg text, cvs etc)
- A detailed explanation of the format should be added in the `format.md` file so other contributers can also understand it.
- Then a Javascript Script that can extract and decode the data is created. (look in `scripts/setupRegions.js` for an example)
- The script must generate a JSON output and write it to a `.json` file in the `output` Directory.
- When a new entity is created, a new function in the `src` file should be created and on how to retrieve the data from the API.(By entity i mean type of data forexample when you add information about sub-counties `regions`)
- Then on each release or pull request, the CI/CD workflows will run each script and generate the APIs.



## Project Structure

The projects consistes of two main section. The NPM package and a static JSON API that is auto generated and served through Github Pages in the `gh-pages` branch.

The main directories include:

### `data`

This folder contains raw data about different locations in Uganda. The data is formarted in any format aslong as each format has a corresponding script that can decode the data and generate well defined JSON files.

### `.github`

The `.github` folder is reserved for the project mantainers and it contains CI/CD workflows (GitHub Actions) and other github specific proect metadata.

### `scripts`

This folder contains the project scripts that are incharge of managing the project and generating JSON data for the API.

### `src`

This folder contains the source code for the `ugaddress` NPM package.

### `output`

This is where all scripts should output there data. It is also the folder that is deployed to Github Pages


## Contributing

To contribute first fork this project and then clone your fork

```sh
git clone https://github.com/<your-username>/ugaddress
```

> - Before continuing you should note that some scripts in this package use the `fs/promises` so you require Node.js version that supports it.

Then install the local dev Dependencies. The project uses `yarn classic` though you can use `npm`. If you have Yarn Berry on your machine, downgrade to classic or use `npm` instead but don't commit and push your `package-lock.json`

```bash
yarn

# If your using NPM
npm install
```

🎉 Your now good to go and add your own code and data.

After this create a pull request and specify the details about what you have added.

> __Note__: Its not a must to write scripts for new data though if you add new data with new format please explain how the data is formated so that those who write scripts can understand how to decode the data.


> - The raw data format might change in the future to support a more generic format that can be understood by all contributers.

You can contribute to this document if you think it needs improvement. If its not clear please open an issue describing whats not clear

___

## <span style="color: black;">For God</span> <span style="color: yellow;">And My</span>  <span style="color: red;">Country</span></p>
