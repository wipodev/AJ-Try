#!/usr/bin/env node
"use strict";
const assert = require("assert");
const { version } = require("../package.json");

process.argv[2] === "--version"
  ? console.log(`v${version}`)
  : console.log("Hello World!");

module.exports = version;
