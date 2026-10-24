// forge-qa intentionally unsafe static-analysis fixture. Never execute or deploy.
const express = require('express');
const childProcess = require('child_process');
const app = express();
app.get('/forge-qa-command', (req, res) => {
  childProcess.exec(req.query.command, (error, stdout) => {
    res.send(error ? 'forge-qa error' : stdout);
  });
});
app.listen(3000);
