import config from 'config'
import io from 'socket.io-client'
import {server} from '../src/app.socket'

export default {
  createSocketServer () {
    return server.listen(config.get('port'))
  },
  createSocketClient () {
    return io.connect(`http://${config.get('host')}:${config.get('port')}`)
  }
}
