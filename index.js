//
//	This object is the link with all the test that we can perform.
//
let master_obj = {
	type,
	length,
	regexp,
	biggerThan,
	smallerThan,
	includes,
	comparison
};

//
//	Take the data and the JSON validation an test if the data matches the
//	restrictions.
//
let main = function(data, test, error)
{
	//
	//	1.	This array will hold all the errors that were found.
	//
	let error_result = error || [];

	//
	//	2.	Start the recursive loop.
	//
	for(let key in data)
	{
		//
		//	IF: 	The test is an object, this means that we have some
		//			extra rules to compare.
		//
		//	ELSE: 	It is a regular value, and in that case we take that
		//			value and compare it with the data as is.
		//
		if(typeof (data[key]) === 'object')
		{
			main(data[key], test[key], error_result);
		}
		else
		{
			for(let function_name in test[key])
			{
				//
				//	1.	Run the test.
				//
				let result = master_obj[function_name](
					data[key],
					test[key][function_name]
				);

				//
				//	2.	By default we set the test type as is.
				//
				let test_type = test[key];

				//
				//	3.	But if we are dealing with a type comparison, we
				//		need to get to it.
				//
				if(test[key].type)
				{
					test_type = test[key].type;
				}

				//
				//	4.	Push to the array result the test that failed.
				//
				if(!result)
				{
					error_result.push({
						variable: key
					});
				}
			}
		}
	}

	//
	//	->	Return the result of our validation. Either an empty array
	//		if no errors were found, or a list of objects pointing out
	//		which variable didn't pass the test.
	//
	return error_result;
};

//
//	Export the main function for others to use.
//
module.exports = main;

//	 ______  _    _  _   _   _____  _______  _____  ____   _   _   _____
//	|  ____|| |  | || \ | | / ____||__   __||_   _|/ __ \ | \ | | / ____|
//	| |__   | |  | ||  \| || |        | |     | | | |  | ||  \| || (___
//	|  __|  | |  | || . ` || |        | |     | | | |  | || . ` | \___ \
//	| |     | |__| || |\  || |____    | |    _| |_| |__| || |\  | ____) |
//	|_|      \____/ |_| \_| \_____|   |_|   |_____|\____/ |_| \_||_____/
//

//
//	Test the type
//
function type(data, test)
{
	if(typeof(data) === test)
	{
		return true;
	}

	return false;
}

//
//	Test the length
//
function length(data, test)
{
	if(data.toString().length === test)
	{
		return true;
	}

	return false;
}

//
//	Test if a number is bigger then the test
//
function biggerThan(data, test)
{
	if(data > test)
	{
		return true;
	}

	return false;
}

//
//	Test if a number is smaller then the test
//
function smallerThan(data, test)
{
	if(data < test)
	{
		return true;
	}

	return false;
}

//
//	Look if a value exists within an array of possibilities
//
function includes(data, test)
{
	let findings = test.find(function(subject) {

		return subject === data;

	});

	if(findings)
	{
		return true;
	}

	return false;
}

//
//	Test data against a regular expression
//
function regexp(data, test)
{
	let regular_expression = new RegExp(test);

	if(regular_expression.exec(data))
	{
		return true;
	}

	return false;
}

//
//	Compare two values and see if they are identical.
//
function comparison(data, test)
{
	if(data === test)
	{
		return true;
	}

	return false;
}

