const https = require('https');
const url = 'https://webhook.site/615f8392-4bdc-47dc-b48f-2745dc8f4008';

https.get(url, (resp) => {
	  let data = '';

	// A chunk of data has been recieved.
	   resp.on('data', (chunk) => {
	       data += chunk;
	   });
	// The whole response has been received. Print out the result.
	   resp.on('end', () => {
	      //No console.log
	   });
}).on("error", (err) => {
	  console.log("Error: " + err.message);
});
