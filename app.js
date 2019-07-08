http = require('http');

route = require('./route');

const server = http.createServer(route);
const port = 3003;
server.listen(port);
console.log(`server running on port ${port}`)
