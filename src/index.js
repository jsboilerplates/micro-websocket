import logger from 'winston'

import config from 'config'
import {server} from './app.socket'

server.listen(config.get('port'))

server.on('listening', () => {
  return logger.info('Application started on http://%s:%d', config.get('host'), config.get('port'))
})

export default server
