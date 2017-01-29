'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('launcher service', function() {
  it('registered the launchers service', () => {
    assert.ok(app.service('launchers'));
  });
});
