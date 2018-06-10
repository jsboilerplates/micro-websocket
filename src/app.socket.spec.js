import {server, io} from './app.socket'

describe('App Socket tests', () => {
  it('It should return server', () => {
    expect(server).not.toBeNull()
  })

  it('It should return socketio', () => {
    expect(io).not.toBeNull()
  })
})
