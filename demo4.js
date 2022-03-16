var fs = require('fs')

var data = {
    name: 'Emily'
}

fs.writeFile('data2.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
})
