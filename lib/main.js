#!/usr/bin/env node
// @ts-check

"use strict";
const { version } = require("../package.json");

process.argv[2] === "--version" ? console.log(`v${version}`) : null;

const ajtry = {
  /** @type {Array<object>} */
  suiteTests: [],
  /** @type {Array<object>} */
  tests: [],

  /**
   * Declare a test.
   * @param {string} name The name of the test.
   * @param {Function} fn The function under test.
   * @returns {void}
   */
  test(name, fn) {
    this.tests = [];
    fn();
    this.suiteTests.push({ name, tests: this.tests });
  },

  getTests() {
    return this.suiteTests;
  },

  /**
   * Declare a equal test.
   * @param {unknown} expected Expected value.
   * @param {unknown} received Received value.
   * @param {string | Error | undefined} message Test message.
   * @returns {object}
   */
  equal(expected, received, message) {
    this.tests.push({
      passed: expected === received,
      expected,
      received,
      message,
    });
  },
};

module.exports = ajtry;
