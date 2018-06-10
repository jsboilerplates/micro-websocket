
import testUtil from '../../../test/util'
import {SAMPLES_EVENT, SAMPLES_BY_NAME_EVENT} from '../../constant'

describe('SampleApi tests', () => {
  var testServer, socketClient
  beforeEach((done) => {
    testServer = testUtil.createSocketServer()
    socketClient = testUtil.createSocketClient()
    socketClient.on('connected', (data) => {
      done()
    })
  })

  afterEach(() => {
    socketClient.close()
    testServer.close()
  })

  describe('Test get all samples', () => {
    let eventName = '/api/samples'
    it('It should response all samples with no message', (done) => {
      socketClient.on(eventName, (data) => {
        expect(data).not.toBeNull()
        expect(data.length).toBeGreaterThan(0)
        done()
      })
      socketClient.emit(eventName)
    })

    it('It should response all samples with message', (done) => {
      socketClient.on(eventName, (data) => {
        expect(data).not.toBeNull()
        expect(data.length).toBeGreaterThan(0)
        done()
      })
      socketClient.emit(eventName, 'message')
    })
  })

  describe('Test get all samples with name keyword', () => {
    let keywords = ['ka', 'ro', 'a', '']
    it(`It should response all samples with keyword: ${keywords[0]}`, (done) => {
      socketClient.on(SAMPLES_EVENT, (data) => {
        expect(data).not.toBeNull()
        expect(data.length).toBeGreaterThan(0)
        done()
      })
      socketClient.emit(SAMPLES_EVENT, { keyword: keywords[0] })
    })

    it(`It should response all samples with keyword:  ${keywords[1]}`, (done) => {
      socketClient.on(SAMPLES_EVENT, (data) => {
        expect(data).not.toBeNull()
        expect(data.length).toBeGreaterThan(0)
        done()
      })
      socketClient.emit(SAMPLES_EVENT, { keyword: keywords[1] })
    })

    it(`It should response all samples with keyword: ${keywords[2]}`, (done) => {
      socketClient.on(SAMPLES_BY_NAME_EVENT, (data) => {
        expect(data).not.toBeNull()
        expect(data.length).toEqual(2)
        done()
      })
      socketClient.emit(SAMPLES_BY_NAME_EVENT, { keyword: keywords[2] })
    })

    it(`It should response all samples with keyword: ${keywords[3]}`, (done) => {
      socketClient.on(SAMPLES_BY_NAME_EVENT, (data) => {
        expect(data).not.toBeNull()
        expect(data.length).toBeGreaterThan(0)
        done()
      })
      socketClient.emit(SAMPLES_BY_NAME_EVENT, { keyword: keywords[3] })
    })
  })
})
