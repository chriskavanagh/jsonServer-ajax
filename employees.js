var faker = require('faker');

function generateEmployees() {
	var employees = []

	for(var id = 0; id < 50; id++) {
		var firstName = faker.name.firstName();
		var lastName = faker.name.lastName();
		var email = faker.internet.email();
		var address = faker.address.city();
		var company = faker.company.companyName();
		//var randomCard = faker.helpers.createCard();

		employees.push({
			"id": id,
			"first_name": firstName,
			"last_name": lastName,
			"email": email,
			"address": address,
			"company": company,
			//"card": randomCard
		})
	}

	return {"employees": employees}
} // end generateEmployees

module.exports = generateEmployees