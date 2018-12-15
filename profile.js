//connect to Github API
let https = require('https')

let get = (username) => {

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: `/users/${username}`,
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
		let profile = JSON.parse(body)
		if (response.statusCode === 200) {
		// TODO: [x] Parse the data
		// convert String to JSON (JavaScript object)
		// TODO: [x] Print the data out
		console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers(s)`)
		} else {
			console.log(`Profile with Username '${username}' not found!`)
		}
	})
})

request.end()

request.on('error',(e) => {
	console.log(e)
})
}

module.exports = {get}

