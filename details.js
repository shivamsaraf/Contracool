console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const ds = require('./detailstore.js');

const argv = yargs.argv;
var command = argv._[0];


if (command === 'add') {
  ds.addNote(argv.name, argv.mail,argv.phone,argv.block,argv.city,argv.pc,argv.state,argv.adhno,argv.add);
}else if(command === 'list') {
  let r=ds.listNote();
  console.log(r);
}
else if(command === 'showname')
{
	let r=ds.nameNote(argv.name);
	console.log(r); 
}
else if(command === 'showcity')
{
	let r=ds.cityNote(argv.city);
	console.log(r); 
}
else if(command === 'showpc')
{
	let r=ds.pcNote(argv.pc);
	console.log(r); 
}
else if(command === 'showstate')
{
	let r=ds.stateNote(argv.state);
	console.log(r); 
}


