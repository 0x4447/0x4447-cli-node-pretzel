# 🥨 Pretzel

Pretzel is a recursive JSON data validation, created after realizing that there are no npm modules that can recursively validate a JSON object with multiple nested values objects.

We are aware of Validate.js, but as the author explains, the [support for complete object is very basic](https://validatejs.org/#validate-nested). We did consider proposing a PR to the project, but the source code turned out to be to hard to rezone about, and thus Pretzel was born.

The goal of this tools is not only to handle nested JSON files like this:

```javascript
{
	first_name: 'David',
	last_name: 'Gatti',
	age: 99,
	address: {
		street: 'Wonder Land',
		nr: 55,
		state: 'TX',
		country: 'United States'
	}
}
```

With rules structured this way:

```javascript
{
	first_name: {
		type: 'string'
	},
	last_name: {
		regexp: '[a-zA-Z]'
	},
	age: {
		type: 'number'
	},
	address: {
		street: {
			type: 'string'
		},
		nr: {
			type: 'number'
		},
		state: {
			includes: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
		},
		country: {
			includes: ['United States', 'Canada']
		}
	}
}
```

We also wanted to make sure the source code is a simple to understand as possible. If you check the `index.js` file you'll see what we mean – use it, modify it, learn from it.

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
//	1.	Execute on the function.
//
let good = pretzel(good_data, rules);
let bad = pretzel(bad_data, rules);

//
//	2.	Check what we've got.
//
console.info(good);
console.info(bad);

```
# Rules

Below you can find a list of all the rules support by the module at this time.

### Bigger then

```javascript
{
	biggerThen: 5
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

### Smaller then

```javascript
{
	smallerThen: 5
}
```

### Type

```javascript
{
	type: "string || number || object || array"
}
```

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where we have additional resources that you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in build custom solutions on top of AWS. Find out more by following this link: https://0x4447.com or, say [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
