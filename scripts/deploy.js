var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  username: '24909f13699',
  host: 'hendrik-liebau.de',
  port: 21,
  localRoot: __dirname + '/../build',
  remoteRoot: '/htdocs/hendrik-liebau/delegation-poker/',
};

ftpDeploy.on('uploaded', function(data) {
  console.log('File ' + data.transferredFileCount + '/' + data.totalFileCount + ': ' + data.filename);
});

ftpDeploy.deploy(config, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Finished FTP upload.');
  }
});
