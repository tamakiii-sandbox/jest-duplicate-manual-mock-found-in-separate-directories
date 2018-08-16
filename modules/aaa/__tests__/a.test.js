'use strict';

jest.mock('../config/aaa');

import { doit } from "../src/a";

describe('aaa', () => {
  test('aaa', () => {
    expect(doit()).toBe('a < type is: mocked A')
  });
});

