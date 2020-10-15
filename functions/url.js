// functions/url.js
const url = require('url');

exports.handler = async event => {

  const url = event.queryStringParameters.url
  const myURL = new URL(url)

  return {

    statusCode: 200,

    body: `${myURL.hostname}`,

  }

}