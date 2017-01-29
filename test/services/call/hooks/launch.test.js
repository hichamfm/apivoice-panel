'use strict';

const assert = require('assert');
const launch = require('../../../../src\services\call\hooks\launch.js');

describe('call launch hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    launch()(mockHook);

    assert.ok(mockHook.launch);
  });
});
