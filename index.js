#!/usr/bin/env node
'use strict';
const meow = require('meow');
const yaml = require('js-yaml');
const fs = require('fs');
const chalk = require('chalk');
const fixtureFactory = require('fixture-factory');
const stringifyObject = require('stringify-object');

const help = `
	Usage
	  $ gen4fak --yaml examples/user.yaml --count 1

	Options
	  --yaml, -y Path to the file describing the format of objects to be generated
	  --count, -c Count of objects to be generated 

	Examples
	  $ gen4fak --yaml examples/user.yaml --count 1
	  [
	    {
	      id: 28867,
	      login: "Simeon.Wilkinson",
	      password: "k8taFjMd4EILVZ3",
	      firstName: "Rosetta",
	      lastName: "Grady",
	      roles: {
	        id: 39796,
	        name: "user"
	      },
	      age: 64,
	      createdAt: new Date('2018-08-08T21:17:43.381Z'),
	      number: "973-0044",
	      secretWords: [
	        "apple",
	        "bat",
	        "cat"
	      ]
	    }
	  ]
`;

const cli = meow(help, {
  flags: {
    yaml: {
      type: 'string',
      alias: 'y',
    },
    count: {
      type: 'number',
      alias: 'c',
      default: 1,
    },
  },
});

if (!cli.flags.yaml || !cli.flags.count) {
  cli.showHelp(2);
}

try {
  const model = yaml.safeLoad(fs.readFileSync(cli.flags.yaml, 'utf8'));
  fixtureFactory.register('user', model);
  const output = fixtureFactory.generate('user', cli.flags.count);
  const pretty = stringifyObject(output, {
    indent: '  ',
    singleQuotes: false,
  });

  console.log(chalk.green(pretty));
} catch (e) {
  console.log(chalk.bold.red(`YAML parse error: ${e.message}`));
  cli.showHelp(2);
}
