'use strict';

const assert = require('assert');
const receive = require('../../../../src\services\call\hooks\receive.js');

describe('call receive hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    receive()(mockHook);

    assert.ok(mockHook.receive);
  });
});
