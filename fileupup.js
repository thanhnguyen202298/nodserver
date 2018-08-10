var express= require('express')
var app=express()
var bodyparser=require('body-parser')
var multer=require('multer')
var fs=require('fs')
var childprocess=require('child_process')

app.use(bodyparser.urlencoded({ extended:false }))
app.use(multer({ dest :__dirname+'/' }).any())

var upload=multer().array('all',5)

app.get('/', function(req,res){
	res.sendFile(__dirname+'/fupload.html')
})
app.post('/uploadform',function(req,res){
	// using upload Object multer can not control file saved
	/*upload(req,res,function(err){
		if(err){console.log(err)
			return
		}
		
		console.log(req.files)
		res.end('file has been uploaded')
	})*/
	

	//perfect control file saved
	for(var i=0;i<req.files.length;i++){
		var worker=childprocess.exec('node support_child.js '+req.files[i].path, function(err,stdout,stderr){
			if(err){
				console.log(err.stack)
				console.log('code: '+err.code)
				console.log('signal: '+err.signal)
			}
		})
		
		worker.on('exit', function(code){console.log('has upload done')})
		res.end('all file has saved')
	}
})

var server=app.listen(3000,function(){
	var host=server.address().address
	var port =server.address().port
	console.log('has starter upload: %s%s', host,port)
})