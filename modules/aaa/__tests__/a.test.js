'use strict';

jest.mock('../src/config', () => {
  const config = {
    type: 'mocked A in a.test.js'
  };

  return {config};
});

import { doit } from "../src/a";

describe('aaa', () => {
  test('aaa', () => {
    expect(doit()).toBe('a < type is: mocked A in a.test.js')
  });
});

