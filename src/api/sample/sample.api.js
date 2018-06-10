import sampleService from './sample.service'
import {SAMPLES_EVENT, SAMPLES_BY_NAME_EVENT} from '../../constant'
import logger from 'winston'

export default (socket) => {
  socket.on(SAMPLES_EVENT, (data) => {
    logger.info('request to get all samples')
    let body = sampleService.all()
    socket.emit(SAMPLES_EVENT, body)
  })

  socket.on(SAMPLES_BY_NAME_EVENT, (data) => {
    logger.info('request to get all samples with name keyword: %s', data.keyword)
    let body = sampleService.allByName(data.keyword)
    socket.emit(SAMPLES_BY_NAME_EVENT, body)
  })
}
