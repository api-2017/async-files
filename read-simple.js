#! /usr/bin/env node
'use strict';
const fs = require('fs');
const file = process.argv[2];
// console.log(process.argv);

fs.readFile(file, (err,data) => {
  if(err) {
    if(err.code === 'ENOENT') {
      console.log(`File '${file}' does not exist`);
      return;
    }
  }
  console.log(`Contents of file '${file}':`)
  console.log(data.toString());
});
