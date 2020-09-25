const fs=require('fs')

module.exports.cat=printFile

function printFile(fileName){
  const pathName='./'+fileName
  fs.readFile(pathName,(err,data) =>{
    if(err) throw err
    process.stdout.write(data)
    process.stdout.write('\nprompt > ')
  })
}