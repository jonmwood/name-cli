#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const log = console.log
const dim = chalk.dim
const italic = chalk.italic
const twitterColor = chalk.hex(`#1da1f2`).bold.inverse
const githubColor = chalk.hex(`#6cc644`).bold.inverse

// Alerts
const sym = require('log-symbols')
const success = chalk.green.inverse
const info = chalk.blue.inverse
const warning = chalk.keyword('orange').inverse
const error = chalk.red.bold.inverse

welcome({
	title: `Jon Wood`,
	tagLine: `Welcome to this cli!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#50fa7b`,
	color: `#000`,
	bold: true,
	clear: true,
})

log(`${italic(`Bio: hello, nice to meet you!!!`)}

${twitterColor(` Twitter `)} ${dim(`https://twitter.com/jonmwood`)}
${githubColor(` Github `)} ${dim(`https://github.com/jonmwood`)}

`)
console.log(`
${sym.success} ${success(` SUCCESS `)}: Thanks for checking out my CLI.

${sym.info} ${info(` INFO `)}: I'm creating a course on NODECLI.com

${sym.warning} ${warning(` WARNING `)}: Please don't copy me.

${sym.error} ${error(` ERROR `)}: This is an error message!!!!
`)
