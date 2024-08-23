const http = require('http');
const studentCount = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    res.write('This is the list of our students\n');
    try {
      const databaseData = await studentCount(process.argv[2]);
      res.end(`${databaseData.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
