// functions/url.js
const url = require('url');

exports.handler = async event => {

  const url = event.queryStringParameters.url
  let output;

  try {
    const myURL = new URL(url)
    output = myURL.hostname
  }
  catch (e) {
    const error = e;
    output = 'error'
  }

  return {

    statusCode: 200,
    body: output,

  }

}