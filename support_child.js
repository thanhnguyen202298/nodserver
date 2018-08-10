const fs=require('fs')
const file=__dirname+'/'+Date.now()+'.jpg'

fs.readFile(process.argv[2], function(err,data){
			fs.writeFile(file, data, function(err){
					if(err)console.log(err)
			})
	})