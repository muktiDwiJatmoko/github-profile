


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

//TODO: [x]Read the data
let request = https.request(options, (response) => {
	let body = ''
	response.on('data', (data) => {
		body = body + data
	})
	response.on('end', () => {
		console.log(typeof body)
	})
	// TODO: [] Parse the data
	// convert String to JSON (JavaScript object)
	// TODO: [] Print the da ta out
})

request.end()

request.on('error',(e) => {
	console.log(e)
})

