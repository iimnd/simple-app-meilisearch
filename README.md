**Table of Contents**:

- [Setup](#setup)
- [Run](#run)
- [Build](#build)
  - [Generate build](#generate-build)
  - [Specify Meilisearch's server URL](#specify-meilisearchs-server-url)
  - [Run your build](#run-your-build)
- [Docker](#docker)



<br/>

## Setup

```bash
yarn
```

or

```bash
npm install
```

## Run

```bash
yarn start
```

or

```bash
npm run start
```

Go to `http://localhost:3000/` and enjoy ! 🎉

## Build

### Generate build

You can generate a build of this project with the following command:

```bash
yarn build
```

or

```bash
npm run build
```

### Specify Meilisearch's server URL

⚠️ By default, the application will call Meilisearch at the exact same address as it is running.
Example: if your app is running at `http://localhost:5000`, it will try to call `http://localhost:5000/indexes` to retrieve the list of your indexes.

If you want to specify the URL where your Meilisearch is running, use the `REACT_APP_MEILI_SERVER_ADDRESS` environment variable.

Example:

```bash
REACT_APP_MEILI_SERVER_ADDRESS=http://0.0.0.0:7700 yarn build
```

or

```bash
REACT_APP_MEILI_SERVER_ADDRESS=http://0.0.0.0:7700 npm run build
```

### Run your build

The above commands will generate an optimized version of the app, inside the `build` folder.

You can then serve it with any web server of your choice.

Example:

```bash
serve build
```

## Docker

build image 

```bash
docker build -t react-docker .
```

run container

```bash
docker run -p 3000:3000 --env-file .env react-docker
```


