const http = require('http');
const PORT = 9001;
const app = require('./app');

http.createServer(app).listen(PORT, (req, res, next) => {
    console.log(`Listening to server at port ${PORT}`)
})