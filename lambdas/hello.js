const handler = (event, context) => {
  const hello = 'Hello World!'
  console.log(hello)
  return hello
}

module.exports = { handler }
