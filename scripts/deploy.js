/* @flow */

import FtpDeploy from 'ftp-deploy';

const config = {
  username: '24909f13699',
  host: 'hendrik-liebau.de',
  port: 21,
  localRoot: `${__dirname}/../build`,
  remoteRoot: '/htdocs/hendrik-liebau/delegation-poker/',
};

const ftpDeploy = new FtpDeploy();

ftpDeploy.on('uploaded', (data) => {
  console.log(`File ${data.transferredFileCount}/${data.totalFileCount}: ${data.filename}`);
});

ftpDeploy.deploy(config, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Finished FTP upload.');
  }
});
