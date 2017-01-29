'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('call service', function() {
  it('registered the calls service', () => {
    assert.ok(app.service('calls'));
  });
});
