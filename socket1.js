var express=require('express')
var app=express()
var http=require('http').Server(app)
var io=require('socket.io')(http)

app.use(express.static('publicsite'))
app.use(express.static('publicsite/script'))
app.get('/', function(req,res){
	res.sendFile(__dirname+'/45.html')
})

io.on('connection',function(socket){
	console.log('A user connected')
	socket.on('disconnect',function(){
		console.log('one user has disconnected: '+__dirname)
	})
})

http.listen(3000,function(){
	console.log('listening radio on: 3000')
})