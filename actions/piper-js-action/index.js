const https = require('https');
const fs = require('fs');

const core = require('@actions/core');

try {
  const exec = require('child_process').exec;

  const command = core.getInput('piper-command');

  exec("curl https://raw.githubusercontent.com/SAP/jenkins-library/piper-binary/piper -o piper &&chmod +x ./piper && ./piper " + command, function(err, stdout, stderr) {
    if (err) {
      console.error(err)
    }
    console.log(stdout);
  });
}catch (error) {
  core.setFailed(error.message);
}