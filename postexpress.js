var express=require('express')
var app = express()
var bodyparser=require('body-parser')

var urlencoder=bodyparser.urlencoded({extended:false})

app.get('/',function(req,res){
	res.sendFile(__dirname+'/'+'index.html')
})

app.post('/process_post',urlencoder,function(req,res){
	response={
		firstname:req.body.firstname,
		lastname:req.body.lastname
	}
	console.log(response)
	res.end(JSON.stringify(response))
})

var server=app.listen(8081,function(){
	var host = server.address().address
	var port = server.address().port
	console.log('Server started at %s: %s port',host,port)
	
	
})