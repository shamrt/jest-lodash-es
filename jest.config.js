/** @type {import('jest').Config} */
module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es)/)'],
}
