#!/usr/bin/env node
/* eslint-disable no-console */

const { exec } = require('child_process');
const path = require('path');

const inquirer = require('inquirer');
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);

const IGNORE_PATTERN = '**/node_modules/*';
const EXTENSIONS = {
  JS: 'js & jsx',
  TSX: 'tsx',
  BOTH: 'js,jsx & tsx',
};

const fetchSettings = () => {
  const questions = [
    {
      name: 'transform',
      type: 'file-tree-selection',
      root: path.join(__dirname, '../upgrades'),
      message: '✨ Which upgrade would you like to run?',
    },
    {
      type: 'list',
      name: 'extension',
      message: '✨ What file extensions should I look at?',
      choices: Object.values(EXTENSIONS),
    },
    {
      name: 'files',
      type: 'file-tree-selection',
      onlyShowDir: true,
      root: process.cwd(),
      message: '✨ And what directory would you like to transform?',
    },
  ];
  return inquirer.prompt(questions);
};

const fetchOptions = () => {
  const questions = [
    {
      name: 'dry',
      type: 'confirm',
      message: '✨ Dry run? (no changes are made to files)',
    },
    {
      name: 'verbose',
      type: 'confirm',
      message: '✨ Extra logging?',
      default: false,
    },
  ];
  return inquirer.prompt(questions);
};

const okToProceed = () => {
  const questions = [
    {
      name: 'confirm',
      type: 'confirm',
      message: 'Does everything look ok?',
    },
  ];
  return inquirer.prompt(questions);
};

const run = async () => {
  const { transform, extension, files } = await fetchSettings();
  const { dry, verbose } = await fetchOptions();

  console.log(`✨ Please review the following:`);
  console.log(`✨ Upgrade script: ${transform}`);
  console.log(`✨ File extension(s): ${extension}`);
  console.log(`✨ Directory: ${files}`);
  console.log(`✨ Dry run: ${dry}`);

  const { confirm } = await okToProceed();

  const options = `${dry ? '-d' : ''} ${verbose ? '-v=2' : ''}`;

  const handleOutput = (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
      return;
    }
    console.log(stdout);
  };

  const codeshiftPath = path.join(__dirname, '../node_modules/.bin/jscodeshift');

  const coreCommand = `${codeshiftPath} ${files} -t=${transform} ${options}`;

  if (confirm) {
    console.log('🚀 Running codemod, please wait a few seconds...');
    if (extension === EXTENSIONS.BOTH || extension === EXTENSIONS.JS) {
      exec(`${coreCommand} --extensions=js,jsx --ignore-pattern='${IGNORE_PATTERN}'`, handleOutput);
    }
    if (extension === EXTENSIONS.BOTH || extension === EXTENSIONS.TSX) {
      exec(
        `${coreCommand} --parser=tsx --extensions=tsx --ignore-pattern='${IGNORE_PATTERN}'`,
        handleOutput,
      );
    }
  } else {
    console.log('👋 Exiting');
  }
};

run();
