var express=require('express')
var app=express()
var bodyparser=require('body-parser')
var multer=require('multer')

var fs=require('fs')

app.use(bodyparser.urlencoded({extended:false}))
app.use(multer({dest:'/tmp'}).any())

app.get('/uploadfile',function(req,res){
	res.sendFile(__dirname+'/fupload.html')
})
app.post('/file-upload',function(req,res){
	console.log(req.files[0].filename)
	console.log(req.files[0].path)
	console.log(req.files[0].mimetype)
	
	var file=__dirname+'/'+req.files[0].filename
	
	fs.readFile(req.files[0].path,function(err,data){
		fs.writeFile(file,data,function(err){
			if(err){
				console.log(err)
			}else{
				response={
					message:'File is uploaded sucessfull',
					filename:req.files[0].filename
				}
			}
			console.log(response)
			res.end(JSON.stringify(response))
		})
	})
})

var server=app.listen(8081,function(){
	var host =server.address().address
	var port=server.address().port
	
	console.log('server is started at %s %s',host,port)
})