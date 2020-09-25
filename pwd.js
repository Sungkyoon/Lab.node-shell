
function printDirectory(data){

   let directory=process.cwd();
  process.stdout.write('Current working directory : ' + directory);
  
  process.stdout.write('\nprompt > ');
}

module.exports.pwd=printDirectory
