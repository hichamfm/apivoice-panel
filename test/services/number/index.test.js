'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('number service', function() {
  it('registered the numbers service', () => {
    assert.ok(app.service('numbers'));
  });
});
