const { runCLI } = require('jest');
const setupJestLocalProject = require('./setup-jest-local-project')

exports.handler = async (event) => {
  // create jest local fs project (for one specific file)
  const projectRootDir = await setupJestLocalProject(event)
  // execute test using jest-cli
  return runCLI({ json: true, verbose: false }, [ projectRootDir ]);
};