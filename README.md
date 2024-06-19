### MARVEL TEST

This application consist in a search page of marvel characters, you can lookup for any of the differents characters, you can saved them as favorites, also you have a detail page where it has the title, description and the comics where they appear.

### DEPLOY

The app is deploy by vercel, at the following link: [Marvel app](https://marvel-test-one.vercel.app/)

### RUNNING LOCALLY

To run the application locally, first you have to create a .env file where you put the next 3 environment variables:
'MARVEL_APP_BASE_URL=https://gateway.marvel.com/v1/public'
'MARVEL_APP_API_KEY='your_public_key''
'MARVEL_APP_PRIVATE_KEY='your_private \_key''

Those api keys you can find first signing up on the developer marvel portal [Portal](https://developer.marvel.com/), the in the [Acount](https://developer.marvel.com/account), you could find the private and the public keys.

Once you have already setup the environment file, the command for running locally is `npm run dev`

### STRUCTURE OF THE PROJECT

Next have a close structure for the pages to be rendered, but besides, of [Next structure](https://nextjs.org/docs/getting-started/project-structure).

The app have a structure defined, inside the src folder, we can see the app folder with the next structure. Also, the other project is structured as following:

1. Components folder, where we have the main Character page, the card displayed by character, the detail component within the title, description, the Comic component, that shows the list of comics of each character. Besides, it is the Header component rendered globally thanks to the layout file in next, and the SerachBar component which allows to search the differents characters.
2. The Context folder, where we create the Context file, that allows us to have the favorites, and the counts globally in the application.
3. The data folder, we have 2 files here, one with mockdata (dataCreator), and the other that have all the calls to the apis needed for the development of the app.
4. The styles folder, there is all the module.css files for the differents views, components and pages that are shown in the app.
5. Finally we have a types file to write all the different types used in the app.
