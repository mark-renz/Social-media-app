# Social Media Application Server
  is a server-side application that uses MERNG stack following [React/GraphQL - Course Build a social media app MERNG Stack](https://www.youtube.com/watch?v=n1mdAPFq2Os) by [**freecodecamp.org**](https://www.freecodecamp.org/).

  ## Installation

  1. clone or download this project and move to project folder.
  
  ```bash
  git clone https://github.com/mark-renz/Social-media-app-server.git
  cd Social-media-app-server
  ```

  2. create config.js with the following credentials. Watch the youtube [guide](https://www.youtube.com/watch?v=n1mdAPFq2Os) for setting up the database server.

  ```bash
  echo "module.exports = {
    MONGODB: YOUR_MONGO_DB_HERE,
    SECRET_KEY: YOUR_SECRET_KEY_HERE
  }" >> config.js
  ```

  3. remove comments for certain files to run using local server.

  `./index.js`
  ```javascript
    const resolvers = require('./graphql/resolvers');
  >>>// use this for local server
  >>>//const { MONGODB } = require('./config.js');
  ```

  `./util/check-auth.js`
  ```javascript
  const jwt = require('jsonwebtoken');
  >>>// use this for local server
  >>>//const { SECRET_KEY } = require('../config');
  ```

  `./graphql/resolvers/users.js`
  ```javascript
  const User = require('../../models/User');
  >>>// use this for local server
  >>>//const { SECRET_KEY } = require('../../config');
  ```

  4. use [npm](https://docs.npmjs.com/about-npm) package manager to run the project in http://localhost:5000/.

  ```bash
npm start
```

  
  ### The api for this project is also available for testing in [heroku](https://arcane-sierra-76993.herokuapp.com/).

  ### To view full project [click here](https://sharp-leavitt-ed6fba.netlify.app).