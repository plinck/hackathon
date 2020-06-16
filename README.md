# ch5ReactSample - 

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project `client` directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`


## Crestron CH5 Specific Scripts - when using live processor

`npm build` will compile the code in src to the build directory.
`npm build:archive` will build a ch5z file from the most recently built build and output to the dist folder.
`npm build:deploy` will deploy the ch5z from the dist folder to a touchpanel "panel".

`npm build:onestep` will execute the above three steps in sequence.

Once the panel is deployed, you can use `npm start` then click the link to your development machine to get live reloading.

Any questions on all this? Drop Chris a line on github or chris@avsp.co.uk
