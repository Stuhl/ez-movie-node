# ez-movie-node - A TMDb API wrapper

ez-movie-node is a TMDb API wrapper. I designed this because other Javascript or Node packages are quite outdated (the most recent is from August 2017) so I thought I make one on my own to accomodate recent updates.

The package is still Work in Progress, so don't expect everything to work correctly (see notes below).

## Installation

    npm i ez-movie-node

### importing the package
```javascript
const EZMovie = require("ez-movie-node")
const ezmovie = new EZMovie(YOUR_API_KEY)
```

### Making a fetch call
```javascript
const main = async () => {
  const response = await ezmovie.certification.movie({})
  const body = await response.json()

  // OR

  ezmovie.ceritifcaiton.movie({})
  .then(res => res.json())
  .then(body => // do stuff)
}
```
As you can see the methods are promises so either doing .then() or await works. Don't forget to catch errors.

**NOTE: Right now there is a problem within the system which prevents running methods which have optional query parameters. If you pass nothing into the method it will error. To prevent erroring always pass an empty object (you can leave methods which don't have any parameters empty). This will be fixed and you won't see this message in the future.**

**For instance `ezmovie.certification.movie` has no optional parameters so doing `ezmovie.certification.movie()` is valid.**

### Fetch call on a method with required parameters
```javascript
// ezmovie.company.details has 1 required parameter (just like in the API documentation)
// company_id: integer

// This is how you make a call like this
const main = async () => {
  const response = await ezmovie.company.details({ company_id: 5})
  const body = await response.json()
}
```

## Documentation
The methods are inline with the way the [API documentation](https://developers.themoviedb.org/3/getting-started/introduction) from TMDb is structured. Please see there for information on what parameters you need to pass in.

### Available methods

|endpoint|methods|
|--|--|
|certification|movie|
||tv|
|changes|movie|
||tv|
||person|
|collection|details|
||images|
||translations|
|company|details|
||alternativeNames|
||images|
|configuration|APIConfiguration|
||countries|
||jobs|
||languages|
||primaryTranslations|
||timezones|
|credits|details|
|discover|movie|
||tv|
|find|findByID|
|genre|movies|
||tv|
|keyword|details|
||movies|

Half of the endpoints are missing (WIP). Also only get requests are allowed.


### Example
endpoint = keyword
method = movies
```javascript
ezmovie.keyword.movies()
```

## Roadmap

 - Implementing the missing endpoints
 - Better error handling
 - Fixing the weird empty object bug
