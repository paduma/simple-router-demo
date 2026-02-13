const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, '../client', req.url);
  
  if (req.url === '/') {
    filePath = path.join(__dirname, '../client/index.html');
  }
  
  const extname = path.extname(filePath);
  
  if (extname === '.js' || extname === '.css') {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': mimeTypes[extname] });
        res.end(content);
      }
    });
  } else {
    fs.readFile(path.join(__dirname, '../client/index.html'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log('支持 History 路由模式');
});
