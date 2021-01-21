# Address Book App

The address book app is a simple SPA which allows a user to view a table of randomly generated users from 
https://randomuser.me/api. When a user selects a user, they are redirected to a page where they can view the 
user's first name, last name, and phone number on the details page.

## Summary

Overall, I wanted to create a very simple interface which follows the traditional UX patterns around viewing a details
page which flows off from a datatable. While the Random user API can generate up to a maximum of 500 users per request,
I kept the number of users to a simple 10 per page, and implemented pagination (making use of Material UI's pagination 
component) to allow a user to access up to 10 pages of users. The details page includes a photograph of the the user, 
along with their name and phone number. 

The following technologies/techniques were used:
* React (this project was bootstrapped with create-react-app)
* Redux - react-redux, redux-thunk
* Semantic HTML
* SASS
* immer.js
* BEM
* Material UI components

The project was tested to 99% jest code coverage with:
* Jest
* @testing-library/react"

If I had more time, I would have liked to:
* Add more features, including the ability to select the number of results per page, and the ability to filter results by name.
* Implement fluid typography
* Allow users to select dark or light mode, by designing around theme-able components

In order to make the application more robust, I would like to:
* Do an accesibility audit of the code, ensuring screen readers can properly access the page
* Convert the ES6 code into Typescript
* Implement end-to-end tests with Cypress 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment (powered by Netlify)

1. Create a Netlify account
2. Get started by authorizing Netflify to access a GitHub/GitLab/BitBucket account, and select the repo for address-book-app
3. Select which branch you want to deploy from
4. Click deploy.

And voila! Netlify handles the deloyment of the application via their CDN.
