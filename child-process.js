const fs=require('fs')
const child_process=require('child_process')
for(var i=0;i<3;i++){
	var worker=child_process.exec('node support_child.js '+i,function(err,stdout,stderr){
		if(err){
			console.log(err.stack)
			console.log(err.code)
			console.log(err.signal)
		}
		console.log('stdout: '+stdout)
		console.log('stderr: '+stderr)
	})
	
	worker.on('exit',function(code){
		console.log('has exited with code: '+code)
	})
}