This is a simple React application that is meant to help people who are wanting to easily compare their weather to other cities that they are curious about in a simple and easy to use app.

## To Run App

Clone repository and install dependencies:

### OpenWeatherMap API

This app uses OpenWeatherMap API keys.
Sign up to receive your own keys or access the docs [here](https://openweathermap.org/api)

Once keys are obtained, create a ```.env``` file for your app in the root of the app.
add these two variables:
```REACT_APP_OPEN_WEATHER_API_KEY='&appid=yourapikey'```
```REACT_APP_DEV_API_URL='http://api.openweathermap.org/data/2.5/weather?q='```

You can find the call in `AddLocations.jsx` for now!

**REMEMBER TO ADD YOUR `.env` FILE TO YOUR `.gitignore` BEFORE COMMITTING CODE!**

### `npm install` 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Styles

This project is using Material-UI for its styles. 
Check out their [docs](https://material-ui.com/getting-started/usage/) for any info about components and props being used.
