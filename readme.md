## Install node.js Ubuntu 16.04 ##

$sudo apt-get install python-software-properties

$curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

$sudo apt-get install nodejs

$node -v

$npm -v

## Create app.js ##
$vi app.js

```
#!javascript
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, 'APP_PRIVATE_IP_ADDRESS');
console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:8080/');
```

$npm install pm2 -g

$pm2 start app.js -n "my_application_name"

$pm2 restart 0 | stop 0 | delete 0 | logs | save

## Generate startup script for pm2 and its managed processes ##

$pm2 startup ubuntu

this will generate something like:

```
#!bash
Output:
[PM2] You have to run this command as root
[PM2] Execute the following command :
[PM2] sudo su -c "env PATH=$PATH:/opt/node/bin pm2 startup ubuntu -u sammy --hp /home/sammy"
```
copy last line and run it, tu start pm2 process at server boot time!

### Install reverse proxy - Nginx ###

USER <----> [ REVERSE PROXY (Nginx) ] <------> [ APP SERVER (Node.js) ]

$sudo apt-get install nginx


```
#!bash
server {

    listen 80;

    server_name example.com;

    # cache the static files
    root /path/to/nodejs/app/static

    location / {
        try_files $uri @nodejs;
    }

    location @nodejs {
        proxy_pass http://APP_PRIVATE_IP_ADDRESS:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}
```

## Development configuration ##

### Supervisor optional ###

$npm install -g supervisor

$supervisor --watch myFirstFolderToWatch, mySecondFolderToWatch

$supervisor myFileToWatch.js

$npm init -y

$npm install --save

$npm install --save-dev

```
package.json
 "private": true,
 "dependencies": {
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-polyfill": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "babel-register": "^6.24.1",
    "express": "^4.15.3",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "webpack": "^3.0.0"
  },
  "devDependencies": {
    "concurrently": "^3.5.0"
  },
"scripts": {
    "express-server": "node ./server", //start express
    "webpack-watch": "webpack -w",
    "dev": "concurrently --kill-others \"npm run webpack-watch\" \"npm run express-server\"",
    "test": "echo \"Error: no test specified\" && exit 1",
  },
```

server.js
```
require('babel-register');
require('./server.babel');
```

server.babel-js
```
import express from 'express';
const app = express()
app.use('/', express.static('public'));
app.listen(process.env.PORT || 3000);
```

.babelrc
```
{
  "presets": [
    "es2015",
    "stage-0",
    "react"
  ],
  "plugins": [
    "transform-runtime",
    "transform-class-properties"
  ]
}
```

webpack.config.js
```
const path = require('path');
module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.json']
  }
};
```

public/index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hello World</title>
</head>
<body>
  <div id="root"></div>
  <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
</body>
</html>
```

src/client.js
```
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render( <h1>Hello, World!</h1>,  document.getElementById('root'));
```


$npm run dev

### Check browser on 127.0.0.1:3000 ###


## More here: ##

https://www.digitalocean.com/community/tutorials/understanding-nginx-http-proxying-load-balancing-buffering-and-caching

https://github.com/babel/example-node-server

https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

https://alejandronapoles.com/2016/09/29/simple-production-environment-with-webpack-and-express/


### REACT LifeCycle Events Precedence ###

<-- initilaize -->

1. constructor
2. componentWillMount
3. render
4. componentDidMount

<-- changing state -->

5. componentWillUpdate
6. render
7. componentWillReceiveProps
8. componentDidUpdate

<-- unmounting component -->

9. componentWillUnmount
