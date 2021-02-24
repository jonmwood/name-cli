#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')

welcome({
	title: pkgJSON.name,
	tagLine: `Welcome to this cli!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#50fa7b`,
	color: `#000`,
	bold: true,
	clear: true,
})

console.log(`
jon wood - designer

Bio: ajsdlfkajsdlkjaflkdfjlkafljasflkjsdlkfjsdflk

🐦 Twitter: https://twitter.com/jonmwood
👨🏻‍💻 Github: https://github.com/jonmwood

`)
