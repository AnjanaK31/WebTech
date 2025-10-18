// Import the built-in HTTP and FS modules
const http = require('http');
const fs = require('fs');
const allPosts = [
  { id: 1, title: 'ABC', body: 'abc' },
  { id: 2, title: 'BCD', body: 'bcd' }
];

// Create an HTTP server
const server = http.createServer((req, res) => {
  
  if (req.url === '/') {  
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is a Webpage');
    res.end(); 
  }
  else if (req.url === '/posts') {
    fs.readFile('./posts.html', 'utf8', (err, html) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading posts.html');
        return;
      }

      // Set the response header for HTML output
      res.writeHead(200, { 'Content-Type': 'text/html' });

      // Generate HTML for each post dynamically
      let htmlposts = '';
      allPosts.forEach(element => {
        htmlposts += `<div>
                        <h1>${element.title}</h1>
                        <p>${element.body}</p>
                      </div>`;
      });
      html = html.replace('REPLACE', htmlposts);
      res.end(html);
    });
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server on localhost:5000
server.listen(5000, 'localhost', () => {
  console.log('Server running at http://localhost:5000');
});
