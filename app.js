


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
		// TODO: [] Parse the data
		// convert String to JSON (JavaScript object)
		let profile = JSON.parse(body)
		console.log(profile.avatar_url)
	})
	
	// TODO: [] Print the da ta out
})

request.end()

request.on('error',(e) => {
	console.log(e)
})

