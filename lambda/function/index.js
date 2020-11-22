// TODO - uncomment in step 3
// const { runCLI } = require('jest');
const setupJestLocalProject = require('./setup-jest-local-project')

exports.handler = async (event) => {
  // create jest local fs project (for one specific file)
  const projectRootDir = await setupJestLocalProject(event)
  /**
   * NOTE - the remote jest execution will not work, 
   * because we've yet to install the lambda layer (all needed runtime dependecies, including jest).
   * This will be done on the next step
   */
  // execute test using jest-cli
  return runCLI({ json: true, verbose: false }, [ projectRootDir ]);
};