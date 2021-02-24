#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const log = console.log
const dim = chalk.dim
const italic = chalk.italic
const twitterColor = chalk.hex(`#1da1f2`).bold.inverse
const githubColor = chalk.hex(`#6cc644`).bold.inverse

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
