const fs = require('fs')
const path = require('path')
const JSON5 = require('json5')

function getJsonFile(filePath) {
    var json = fs.readFileSync(path.join(__dirname, 'filePath'), 'utf-8')
    return JSON5.parse(json);
}

// var json = getJsonFile('./userInfo.json5')
// console.log('json', json)

module.exports = function(app) {
    app.get("/user/userinfo", function (rep, res) {
        var json = getJsonFile('./userInfo.json5')
        res.json(Mock.mock(json))
    })
}