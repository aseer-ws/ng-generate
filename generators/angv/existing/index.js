/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

// const cwd = process.cwd();

const pathPrompt = {
  type: 'input',
  name: 'path',
  message: 'What is the component directory? (app/components)',
  default: 'app/components',
};

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component you want to add tests for?',
    default: 'Button',
  },
];
prompts.push(pathPrompt);

module.exports = {
  description: 'Add tests for an existing component',
  pathPrompt,
  prompts,
  actions: data => {
    // index.test.js
    const actions = [];

    return actions;
  },
  prettier: () => ({
    type: 'prettify',
    path: `{{path}}/`,
  }),
};
