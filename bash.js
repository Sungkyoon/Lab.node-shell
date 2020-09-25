//const fs=require('fs')

const {pwd}=require('./pwd.js')
const {ls}=require('./ls.js')
const {cat}=require('./cat.js')
const {curl}=require('./curl.js')


process.stdout.write('prompt > ')

process.stdin.on('data',function callback(data){
  const cmd=data.toString().trim().split(' ');
  
  if(cmd[0]==='pwd')
  pwd(cmd)
  else if(cmd[0]==='ls')
  ls(cmd)
  else if(cmd[0]==='cat'){
    const fileName=cmd[1]
    cat(fileName)
  }
  else if(cmd[0]==='curl'){
    const url=cmd[1]
    curl(url)
  }
});