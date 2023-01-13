const fs = require ('fs')
const write = function (data = "Default"){

fs.writeFileSync('data.txt', data);

}
module.exports = write