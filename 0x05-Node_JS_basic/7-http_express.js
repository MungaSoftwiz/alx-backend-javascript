const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  try {
    const databaseData = await countStudents(process.argv[2]);
    res.send(`${title}${databaseData.join('\n')}`)
  } catch (error){
    res.send(`${title}${error.message}`);
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
