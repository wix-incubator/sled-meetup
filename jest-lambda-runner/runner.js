const fs = require('fs');
const path = require('path')
const AWS = require('aws-sdk');

// TODO - make sure your AWS credentials file exist locally and that the region is correct
AWS.config.update({region: 'us-east-1'});

const testRunner = async ({ testPath }) => {
  const { base } = path.parse(testPath)
  const contents = fs.readFileSync(testPath, 'utf8');

  const lambda = new AWS.Lambda();
  const { Payload } = await new Promise((resolve, reject) => {
    lambda.invoke({
      FunctionName: 'wix-sled-meetup',
      Payload: JSON.stringify({
        testFileName: base,
        testFileContent: contents
      })
    }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  })
  const results = JSON.parse(Payload)
  try {
    return results.results.testResults[0]
  } catch (error) {
    throw new Error(results.errorMessage + '\n' + ((results.trace || []).join('\n')))
  }
};

module.exports = testRunner