/**
 * Component Generator
 */

/* eslint strict: ["off"] */

('use strict');

const existing = require('../existing');
const cwd = process.cwd();

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
  },
];
prompts.unshift(existing.pathPrompt);

module.exports = {
  description: 'Add an view component',
  prompts,
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: `${cwd}/{{path}}/{{properCase name}}/{{properCase name}}index.ts`,
        templateFile: './angv/list.component.ts.hbs',
        abortOnFail: true,
      },
    ];

    // actions.push(...existing.actions(data));
    actions.push(existing.prettier());

    return actions;
  },
};
