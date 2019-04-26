let pretzel = require('../index');
let expect = require('chai').expect;

//
//	RULES
//
let rules = {
	company_name: {
		type: 'string'
	},
	address: {
		street: {
			type: 'string'
		},
		state: {
			includes: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
		},
		code: {
			type: 'number'
		},
		country: {
			includes: ['United States', 'Canada']
		},
		contact: {
			email: {
				type: 'string'
			},
			phone_nr: {
				type: 'string'
			}
		}
	},
	employs: {
		ceo: {
			individual: {
				first_name: {
					type: 'string'
				},
				last_name: {
					type: 'string'
				}
			},
			assistant: {
				first_name: {
					type: 'string'
				},
				last_name: {
					type: 'string'
				}
			}
		}
	}
};

describe('Recursive Is', function() {

	it('OK', function(done) {

		//
		//	DATA
		//
		let data = {
			"company_name": "0x4447",
			"address": {
				"street": "42 Life",
				"state": "TX",
				"code": 123456,
				"country": "United States",
				"contact": {
					"email": "hello@0x4447.email",
					"phone_nr": "+1 (555) 555-6666"
				}
			},
			"employs": {
				"ceo": {
					"individual": {
						"first_name": "David",
						"last_name": "Gatti"
					},
					"assistant": {
						"first_name": "Very",
						"last_name": "Helpful"
					}
				}
			}
		};

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	Check if we got an array.
		//
		expect(result)
			.to.be.an('array')
			.that.is.empty;

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});

describe('Recursive Is not', function() {

	it('OK', function(done) {

		//
		//	DATA
		//
		let data = {
			"company_name": "0x4447",
			"address": {
				"street": "42 Life",
				"state": "TX",
				"code": "123456",
				"country": "United States",
				"contact": {
					"email": "hello@0x4447.email",
					"phone_nr": "+1 (555) 555-6666"
				}
			},
			"employs": {
				"ceo": {
					"individual": {
						"first_name": 12345,
						"last_name": "Gatti"
					},
					"assistant": {
						"first_name": "Very",
						"last_name": "Helpful"
					}
				}
			}
		};

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	We should have gotten back and array with what is wrong.
		//
		expect(result)
			.to.be.an('array')
			.to.deep.include({
				variable: "code"
			})
			.to.deep.include({
				variable: "first_name"
			});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
