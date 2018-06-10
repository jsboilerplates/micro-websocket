import configSampleApi from './sample/sample.api'

export default (socket) => {
  socket.emit('connected', 'true')

  configSampleApi(socket)
}
