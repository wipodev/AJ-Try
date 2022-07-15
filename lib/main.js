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
  /** @type {Array<object>} */
  check: [],
  /** @type {Array<object>} */
  observations: [],
  /** @type {number} */
  suiteFail: 0,
  /** @type {number} */
  suitePass: 0,
  /** @type {number} */
  testFail: 0,
  /** @type {number} */
  testPass: 0,
  /** @type {number} */
  t0: 0,

  /**
   * Declare a test.
   * @param {string} name The name of the test.
   * @param {Function} fn The function under test.
   * @returns {void}
   */
  test(name, fn) {
    this.t0 = performance.now();
    this.tests = [];
    fn();
    this.checkTest(name);
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

  /**
   * check the tests
   * @param {string} name The name of the test.
   * @returns {void}
   */
  checkTest(name) {
    let t1 = 0;
    let sp = 0;
    let sf = 0;
    let tl = 0;

    this.tests.forEach((test) => {
      test.passed ? this.testPass++ : this.testFail++;
      test.passed ? sp++ : sf++;
      t1 = performance.now();
      this.check.push(
        `${
          test.passed ? "\x1b[32m\x1b[1m✓\x1b[0m" : "\x1b[31m\x1b[1m✕\x1b[0m"
        } ${name} - ${test.message} (${(t1 - this.t0).toFixed(2)} ms)`
      );
      if (!test.passed) {
        if (this.tests.length > 1) {
          tl === 0
            ? this.observations.push(`\n  \x1b[31m\x1b[1m● ${name}\x1b[0m`)
            : null;
          tl++;
          this.observations.push(
            `       \x1b[31m\x1b[1m${test.message}\x1b[0m`
          );
        } else {
          this.observations.push(
            `\n  \x1b[31m\x1b[1m● ${name} > ${test.message}\x1b[0m`
          );
        }
        this.observations.push(
          `       Expected: \x1b[32m\x1b[1m${test.expected}\x1b[0m`
        );
        this.observations.push(
          `       Received: \x1b[31m\x1b[1m${test.received}\x1b[0m`
        );
      }
    });
    sp > sf ? this.suitePass++ : this.suiteFail++;
  },
};

module.exports = ajtry;
