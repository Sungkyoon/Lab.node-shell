const request=require('request')

module.exports.curl=getWebContent

function getWebContent(url){
   request(url,function(err,response,body){
     if(err) throw err
     else {
     process.stdout.write('statusCode:', response && response.statusCode)
     process.stdout.write('\n'+body)
     process.stdout.write('\nprompt > ')
     }
   }
   )
   
}