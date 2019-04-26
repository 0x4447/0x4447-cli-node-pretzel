# 🥨 Pretzel

We created our Pretzel recursive JSON data validation after realizing that there were no npm modules that could recursively validate a JSON object with multiple nested values objects.

We are aware of Validate.js, but as the author explains, the [support for complete object is very basic](https://validatejs.org/#validate-nested). We did consider proposing a PR to the project, but the source code turned out to be too hard to rezone about. Thus, Pretzel was born.

The goal of this tool is not just to handle nested JSON files like this...

```javascript
{
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
		},
		"management": [{
			"first_name": "Good",
			"last_name": "Leaders"
		}]
	}
}
```

...with rules structured this way:

```javascript
{
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
		},
		management: {
			type: 'array'
		}
	}
}
```

We also wanted to make the source code as simple to understand as possible. If you check the `index.js` file, you'll see what we mean. Use it, modify it, learn from it.

# How to Install

```
] npm install @0x4447/pretzel
```

# How to Test

```
] npm run test
```

# How to Require

```
let pretzel = require('pretzel');
```

# How to Use

```javascript

let pretzel = require('pretzel');

//
//	RULES
//
let rules = {
	name: {
		type: "string"
	}
};

//
//	Good DATA
//
let good_data = {
	name: '0x4447'
};

//
//	Bad DATA
//
let bad_data = {
	name: 123321
};

//
//	1.	Execute validation.
//
let good = pretzel(good_data, rules);
let bad = pretzel(bad_data, rules);

//
//	2.	Check the validation result.
//
console.info(good);
console.info(bad);

```
# Rules

Below is a list of all the rules the module supports at this time.

### Bigger than

```javascript
{
	biggerThan: 5
}
```

### Smaller than

```javascript
{
	smallerThan: 5
}
```

### Comparison

```javascript
{
	comparison: 1
}
```

### Includes

```javascript
{
	includes: [9, '0x4447']
}
```

### Regular Expression

```javascript
{
	regexp: '[aAzZ.-]'
}
```

### Types

```javascript
{
	type: "string || number || object || array"
}
```

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where we have additional resources that you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in build custom solutions on top of AWS. Find out more by following this link: https://0x4447.com or, say [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
