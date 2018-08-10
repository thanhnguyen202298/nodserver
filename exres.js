var expr=require('express')
var app=expr()

app.get('/index.html', function(req,res){
	res.sendFile( __dirname+'/' + 'index.html')
})

app.get('/process_get',function(req,res){
	response={
		firstname:req.query.firstname,
		lastname:req.query.lastname
	}
	console.log(response)
	res.end(JSON.stringify(response))
})

var server= app.listen(8081,function(){
	var host=server.address().address
	var port=server.address().port
	
	console.log("listening on address: http://%s:%s",host,port)
})

