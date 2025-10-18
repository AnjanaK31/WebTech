// Import the required built-in Node.js modules
const http = require('http');   
const fs = require('fs');       
const url = require('url');    
const path = require('path');   

// Create the HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname; 

    function logError(message) {
        const logMessage = `[${new Date().toISOString()}] ${message}\n`; // Add timestamp
        fs.appendFile('error.log', logMessage, (err) => {  // Append the log message
            if (err) console.error('Failed to write log:', err); // Handle write failure
        });
    }
    if (pathname === '/') {
        const filePath = path.join(__dirname, 'index.html');  

        // Try reading index.html
        fs.readFile(filePath, (err, data) => {
            if (err) {
                // If index.html doesn’t exist -> log error & return fallback message
                logError(`index.html not found: ${err.message}`);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Home Page</h1><p>index.html missing. Default home message.</p>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (pathname === '/about') {
        const filePath = path.join(__dirname, 'about.html'); 
        fs.readFile(filePath, (err, data) => {
            if (err) {
                // If about.html doesn’t exist -> log error & return fallback message
                logError(`about.html not found: ${err.message}`);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>About Page</h1><p>about.html missing. Default about message.</p>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });  // Set HTTP status to 404
        res.end('<h1>404 - Page Not Found</h1>');             // Display 404 message
    }
});

// Define the port to listen on
const PORT = 3000;

// Start the server 
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
