const https = require('https');
const url = 'https://mg6dsry1mciw4mg1do3w5l37cyip6oud.oastify.com';

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
