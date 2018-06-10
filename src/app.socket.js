import app from './app'
import http from 'http'
import socketio from 'socket.io'
import apiHandler from './api'

export const server = http.Server(app)

export const io = socketio(server)

io.on('connection', apiHandler)
