const bs = require('browser-sync').create()
const { resolve } = require('./index')
const fs = require('fs')

const socketEmitter = {
  removeFile(path) {
    fs.rmSync(path)
  }
}

const watchSocketEmitter = () =>
  bs.sockets.on('connection', (client) => Object.keys(socketEmitter).forEach((key) => client.on(key, socketEmitter[key])))

const createServer = ({ port }) => {
  bs.init(
    {
      server: resolve('../app'),
      open: true,
      ui: false,
      port
    },
    watchSocketEmitter
  )
}

const reloadServer = () => bs.reload()

const destoryServer = () => bs.exit()

module.exports = {
  createServer,
  reloadServer,
  destoryServer
}
