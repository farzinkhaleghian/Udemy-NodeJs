const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.statusCode = 200;

        res.write('<html>');
        res.write('<head><title>users</title></head>');
        res.write('<body><h1>Welcome to my page</h1></body>');
        res.write('<body><form action="/create-user" method = "POST"><input type= "text"  name= "username"><button type= "submit"> Send </button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users'){
        res.statusCode = 200;
        res.write('<html>');
        res.write('<head><title>users</title></head>');
        res.write('<body><ul><li>Farzin Khaleghi</li></ul></body>');
        res.write('<body><ul><li>Ellie Kia</li></ul></body>');
        res.write('<body><ul><li>Ali jj</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST'){
        body = [];
        req.on('data',(chunk) =>{
            body.push(chunk)
        });
        req.on('end', () => {
            const bodyParser = Buffer.concat(body).toString();
            const user = bodyParser.split('=')[0];
            console.log(user)
        });
        res.statusCode = 302; 
        res.setHeader('location','/')
        return res.end();
    }
    // res.setHeader('Content-Type','text/html');
    // res.write('Hello World');
    // res.end();
};

module.exports = requestHandler;
