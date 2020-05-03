
/*

* Validate a state machine definition
* Given input, execute the state machine
  * generate logs
  * create artifacts
  * report the number of state transitions
* List previous executions
* Retry a previous exection
* Retry a step from a previous execution

*/



class ServerlessStateboxPlugin {
  constructor(serverless, options) {
    this.serverless = serverless
    this.options = options

    this.commands = {
      welcome: {
        usage: 'Helps you start your first Serverless plugin',
        lifecycleEvents: ['hello', 'world'],
        options: {
          message: {
            usage: 'Specify the message you want to deploy (e.g. "--message \'My Message\'" or "-m \'My Message\'")',
            required: true,
            shortcut: 'm'
          }
        }
      },
      statebox: {
        usage: 'Helps with local development when working with AWS Step Functions',
        lifecycleEvents: [],
        options: {}
      }
    }

    this.hooks = {
      'before:welcome:hello': this.beforeWelcome.bind(this),
      'welcome:hello': this.welcomeUser.bind(this),
      'welcome:world': this.displayHelloMessage.bind(this),
      'after:welcome:world': this.afterHelloWorld.bind(this)
    }
  }

  beforeWelcome() {
    this.serverless.cli.log('Hello from Serverless!')
  }

  welcomeUser() {
    this.serverless.cli.log('Your message:')
  }

  displayHelloMessage() {
    this.serverless.cli.log(`${this.options.message}`)
  }

  afterHelloWorld() {
    this.serverless.cli.log('Please come again!')
  }
}

module.exports = ServerlessStateboxPlugin
