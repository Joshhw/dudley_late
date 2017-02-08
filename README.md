# t-time

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.6.
Look in the slack channel for the api-key and session secret and copy that into local.env.js
server/config/environment/development.js  set seedDB:true

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org)
- [Gulp](http://gulpjs.com/)
- [MongoDB](https://www.mongodb.org/)

### Developing
First, install [Docker](https://docs.docker.com/engine/installation/).

```bash
# Create the docker containers and start the app
$ docker-compose up
```

Then open [localhost:9000](http://localhost:9000) to see the project locally.

(It's quite convenient to alias `docker-compose` to `dc` in your bash or zsh
rc file.)

## Testing

```bash
# Run the unit tests
$ docker-compose run server npm test
```
