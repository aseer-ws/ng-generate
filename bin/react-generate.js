#! /usr/bin/env node
const shell = require('shelljs');
// const fs = require('fs');
const childProcess = require('child_process');
const process = require('process');
const _ = require('lodash');
const path = require('path');

// const COMPONENT = 'component';
const ANGV = 'angv';

const generator = path.join(__dirname, '../generators/index.js');
const plopGen = ['--plopfile', generator];

const [, , ...args] = process.argv;
const commandLineArgs = args.toString().split(',');
const stdioInherit = { stdio: 'inherit' };

function execShell(commandArray) {
  childProcess.execFileSync(
    path.join(__dirname, '../node_modules/.bin/plop'),
    commandArray,
    { ...stdioInherit },
  );
}

// validate input
if (!commandLineArgs[0]) {
  shell.exec(
    `echo Sorry! react-generate requires an argument to be passed. Run react-generate --help for more details`,
  );
  process.exit(0);
}

// get the type of generator
shell.env.GENERATOR_TYPE = _.includes(commandLineArgs[0], 't')
  ? 'existing'
  : 'new';
switch (commandLineArgs[0]) {
  case 'angv':
    execShell([...plopGen, ANGV, ..._.drop(commandLineArgs)]);
    break;
  default:
    shell.exec(`echo Sorry ${commandLineArgs[0]} is not a valid command`);
    break;
}
