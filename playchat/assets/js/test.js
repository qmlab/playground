socket.on('connect', function() {
  socket.on('message', function(message) {
    socket.emit('message', { msg: message})
  })
})
