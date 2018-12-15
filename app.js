


let https = require('https')

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/muktiDwiJatmoko',
	method: 'GET',
	headers: {
		'user-agent' : 'MuktiDJ'
	}
	//port itu sebuah channel untuk yg digunakan oleh bbrp LAN untuk berkomunikasi
	//http itu portnya 880 https 443
}
let request = https.request(options, (result) => {
	console.log('Got response: ', result.statusCode) 
	//statusCode itu adalah status code dari http, ketika minta sesuatu status codenya 200 berjalan lancar

	//output: 403 , 403 itu forbiden
})

request.end()

request.on('error',(e) => {
	console.log(e)
})

