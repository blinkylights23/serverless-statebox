class ServerlessStateboxPlugin {
  constructor(serverless, options) {
    this.serverless = serverless
    this.options = options

    this.commands = {
      statebox: {
        usage: 'Helps with local development when working with AWS Step Functions',
        lifecycleEvents: ['list'],
        options: {},
        commands: {
          validate: {
            usage: 'Lint/validate a configured state machine',
            lifecycleEvents: [],
            options: {
              statemachine: {
                shortcut: 's',
                usage: 'The state machine to validate',
                required: true
              }
            }
          },
          execute: {
            usage: 'Execute a state machine',
            lifecycleEvents: [],
            options: {
              statemachine: {
                shortcut: 's',
                usage: 'The state machine to execute',
                required: true
              }
            }
          }
        }
      }
    }

    this.hooks = {
      'statebox:parse': this.parse.bind(this),
      'statebox:list': this.list.bind(this)
    }
  }

  parse() {
    this.stateboxConfig = this.serverless.service.custom.statebox
    this.serverless.cli.log(JSON.stringify(this.stateboxConfig, null, 2))
  }

  list() {
    console.log(this.serverless)
    // let stateboxConfig = this.serverless.service.custom.statebox
    // let stateMachines = this.serverless.service.stepFunctions.stateMachines
    // this.serverless.cli.log(stateboxConfig)
    // this.serverless.cli.log(stateMachines)
  }
}

module.exports = ServerlessStateboxPlugin
