var fs = require('fs');

console.log("\n My contact information is below. :) \n");

fs.readFile('./info.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});