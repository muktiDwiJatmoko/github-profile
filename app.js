let profile = require('./profile.js')

let profiles = ['rizafahmi', 'muktiDwiJatmoko' , 'ronishak']
profiles.map(user => {
	return profile.get(user)
})

