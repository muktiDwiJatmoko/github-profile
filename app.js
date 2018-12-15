//connect to Github API
let https = require('https')

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/muktiDwiJatmoko',
	method: 'GET',
	headers: {
		'user-agent' : 'MuktiDJ'
	}
}

//TODO: [x]Read the data
let request = https.request(options, (response) => {
	let body = ''
	response.on('data', (data) => {
		body = body + data
	})
	response.on('end', () => {
		// TODO: [x] Parse the data
		// convert String to JSON (JavaScript object)
		let profile = JSON.parse(body)
		// console.log(profile.login + ' owns ' + profile.public_repos + ' repo(s) ')

		// TODO: [x] Print the data out
		console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers(s)`)
	})
})

request.end()

request.on('error',(e) => {
	console.log(e)
})

