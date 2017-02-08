# t-time

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.6.
Look in the slack channel for the api-key and session secret and copy that into local.env.js
server/config/environment/development.js  set seedDB:true

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing
First, istall [Docker Toolbox](https://docker.com/toolbox).

```bash
# Create a VM to run the app in, isolated from other projects
$ docker-machine create -d virtualbox dudley-late

# Set your shell's env vars to point to the new VM (do this for any new shell)
$ eval "$(docker-machine env dudley-late)"

# Create the docker containers and start the app
$ docker-compose up
```

Then open [dudley-late.local](http://dudley-late.local) to see the project
locally.

## Testing

```bash
# Run the unit tests
$ docker-compose run server npm test
```
