const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

/*
const forceSsl = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
app.use(forceSsl());
*/

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var portNumber = process.env.PORT || 57012;
app.listen(portNumber, function () {
  console.log('\n=======================================================================\n');
  console.log(`yogeshs-angular-client-app is up running on port: ${portNumber}\n`);
  console.log('=======================================================================\n');
});
