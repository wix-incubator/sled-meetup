const { fail, pass } = require('create-jest-runner')

const testRunner = async ({ testPath }) => {
  // you can deciee if the test file failed or pass, without running the test itself.... 
  const start = Date.now()
  const end = Date.now() + 1000
  if (Math.random() > 0.5) {
    return pass({ start, end, test: { path: testPath } });
  } else {
    return fail({
      start,
      end,
      test: { path: testPath, errorMessage: `☹️ ☹️ ☹️ because the universe is random ... ☹️ ☹️ ☹️`},
    });
  }
  // TODO - invoke lmabda and return its results to jest
};

module.exports = testRunner