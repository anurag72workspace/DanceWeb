const http = require('http');
const fs = require('fs');
// const { url } = require('inspector');
const hostname = '127.0.0.1';
const port = 3000;
const Home = fs.readFileSync('./Home.html');
const About = fs.readFileSync('./About.html');
const Services = fs.readFileSync('./Services.html');
const Contact = fs.readFileSync('./Contact.html');
const Learn = fs.readFileSync('./Learn.html');
const picture1 = fs.readFileSync('./technical-cm-.jpg');
// const Feedback = fs.readFileSync('./Feedback.html');

const server = http.createServer((req, res)=> {
    console.log(req.url);
    url= req.url;
    res.statusCode= 200;
    
    res.setHeader('Content-Type', 'text/html');
    if(url == '/')
    {
    res.end(Home);
    }
    else if(url == '/About')
    {
    res.end(About);
    }
    
    else if(url == '/Services')
    {
    res.end(Services);
    }
    
    else if(url == '/Contact')
    {
    res.end(Contact);
    }
    else if(url == '/Learn')
    {
    res.end(Learn);
     }
    // else if(url == '/Feedback')
    // {
    // res.end(Feedback);;
    // }
    
    else{
        res.statusCode = 404;
    res.end("<h1>404 not found</h1>");

    }
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
}) ;