const path = require('path');
const parent = path.dirname(__dirname);
console.log('parent', parent );
const notFound = (req, res) => {
    res.status(404).sendFile(parent+'/public_starter/not_found.html')
    
}

module.exports = notFound