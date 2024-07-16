Git: https://github.com/centerofcode/nodejs_session.git

1. Express generator
https://expressjs.com/en/starter/generator.html

$ npm install -g express-generator
$ express --no-view 
$ npm install

2. .env use
https://www.npmjs.com/package/dotenv

$ npm i dotenv
Create .env file inside project root directory

3. Auto reload nodejs/express project
https://www.npmjs.com/package/nodemon

$ npm install -g nodemon

"scripts": {
    "start": "nodemon ./bin/www"
  },

4. mysql2 install
https://www.npmjs.com/package/mysql2
$ npm i mysql2

https://www.npmjs.com/package/sequelize
$ npm i sequelize

Create db.config.js file
config/db.config.js

5. Install jsonwebtoken
https://www.npmjs.com/package/jsonwebtoken

$ npm i jsonwebtoken