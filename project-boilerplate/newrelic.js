/*jslint node: true */

exports.config = {
  app_name: [global.APP_NAME],
  logging : {
    filepath: require('path').join('/mnt/log', global.APP_NAME + '-newrelic_agent.log'),
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'info'
  }
};
