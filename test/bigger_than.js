let pretzel = require('../index');
let expect = require('chai').expect;

//
//	RULES
//
let rules = {
	nr: {
		biggerThan: 5
	}
};

describe('6 Is', function() {

	it('Bigger then 5', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 6
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

describe('4 Is not', function() {

	it('Bigger then 5', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 4
		};

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	We should have gotten back and array with what is wrong.
		//
		expect(result[0])
			.to.be.an('object')
			.to.include({
				variable: 'nr'
			});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
