'use strict'

const WebSocket = require('ws')
const assert = require('assert')

const { URL, INPUT, EXPECTED_OUTPUT } = process.env

const ws = new WebSocket(URL)

ws.on('open', () => {
  ws.send(INPUT)
})

ws.on('message', data => {
  if (EXPECTED_OUTPUT) {
    assert(data === EXPECTED_OUTPUT)
  } else {
    console.log(data)
  }
})