# Boilerplate for REST Microservice in NodeJS
[![Build Status](https://travis-ci.org/jsboilerplates/micro-websocket.svg?branch=master)](https://travis-ci.org/jsboilerplates/micro-websocket)
[![codecov](https://codecov.io/gh/jsboilerplates/micro-websocket/branch/master/graph/badge.svg)](https://codecov.io/gh/jsboilerplates/micro-websocket)
[![dependencies Status](https://david-dm.org/jsboilerplates/micro-websocket/status.svg)](https://david-dm.org/jsboilerplates/micro-websocket)
[![devDependencies Status](https://david-dm.org/jsboilerplates/micro-websocket/dev-status.svg)](https://david-dm.org/jsboilerplates/micro-websocket?type=dev)
[![](https://images.microbadger.com/badges/image/jsboilerplates/micro-websocket.svg)](https://microbadger.com/images/jsboilerplates/micro-websocket)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsboilerplates/micro-websocket/blob/master/LICENSE)

## Features
- WebSocket API
- Middlewares (compress, helmet, cors, favicon, body parser and static)
- Unit Test with Jest, Logging
- ES6, ESLint
- CI with Travis, Docker Build

## Installation

``` bash
# install dependencies
npm install

```

## Running the tests

``` bash
# run all tests
npm test

# run test coverage
npm run coverage
```

## Build and Run

``` bash

# serve with hot reload at localhost:3030
npm start

# build for production with minification
npm run build

```

## Docker support

Build docker image

```
bash Dockerbuild.sh
```

Run docker container

```
docker run -d --name micro-websocket -p 3030:3030 jsboilerplates/micro-websocket
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jsboilerplates/micro-websocket/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
