const fs=require('fs');
//fs.appendFileSync('hello.txt','heyy');
const os=require('os');
var name=os.userInfo();
name.username='salil'
fs.appendFileSync('hello.txt','       hello'+name.username);
console.log('step1');
const note=require('./nodes.js');
console.log(note);