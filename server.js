var connect = require('connect');
var serveStatic = require('serve-static');
const PORT = process.env.PORT || 5000;

connect()
    .use(serveStatic("public"))
    .listen(PORT, () => console.log('Server running on' + PORT + '...'));