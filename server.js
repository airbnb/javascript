const http = require('http')

const app = require('./app')

const chatController = require('./controllers/chat')

const port = process.env.PORT || 4000

const server = http.createServer(app)

const socketIo = require('socket.io')

const io = socketIo(server)

const createRoom = (room) => {
    const rooms = room.split(':')
    let froom
    if (rooms[0] > rooms[1])
        froom = rooms[0] + ':' + rooms[1]
    else
        froom = rooms[1] + ':' + rooms[0]
    return froom
    // console.log(froom)
}

io.on('connection', socket => {
    socket.on('join', room => {
        socket.join(createRoom(room))
    })

    socket.on('fetchChat', (room) => {
        // const chats = chatController.getAllChats(createRoom(room))
        socket.emit('fetchChatBack', chats)
    })

    socket.on('send-chat', p => {
        // chatController.postMessage(p.payload)
        socket.to(createRoom(p.room)).emit('brod', p.message)
    })
})

server.listen(port)