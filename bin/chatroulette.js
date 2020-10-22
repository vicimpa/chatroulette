#!/usr/bin/env node
const {join} = require('path')
const {exec} = require('child_process')

const child = exec('node_modules/.bin/electron .', {
  cwd: join(__dirname, '..'),  
})

child.stderr.pipe(process.stderr)
child.stdout.pipe(process.stdout)
process.stdin.pipe(child.stdin)
