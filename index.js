var fs = require('fs');

console.log("\n My contact information is below. :) \n");

var content = fs.readFileSync("info.json");

console.log("" + content);