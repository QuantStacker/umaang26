const http = require('http');
const fs = require('fs');
const path = require('path');

let PORT = Number(process.env.PORT) || 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function createServer() {
  return http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = path.extname(filePath);
  let contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code == 'ENOENT'){
        res.writeHead(404);
        res.end('404 Not Found');
      }
      else {
        res.writeHead(500);
        res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });

  });
}

function startServer(port, attempts = 5) {
  const server = createServer();
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && attempts > 0) {
      const next = port + 1;
      console.log(`Port ${port} in use, trying ${next}...`);
      startServer(next, attempts - 1);
    } else {
      console.error('Failed to start server:', err);
      process.exit(1);
    }
  });
  server.listen(port, '127.0.0.1', () => {
    PORT = port;
    console.log(`Server running at http://localhost:${port}/`);
  });
}

startServer(PORT);
