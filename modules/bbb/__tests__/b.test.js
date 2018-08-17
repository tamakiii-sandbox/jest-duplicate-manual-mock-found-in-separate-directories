'use strict';

jest.mock('../config/bbb');

import { doit } from "../src/b";

describe('bbb', () => {
  test('bbb', () => {
    expect(doit()).toBe('b < name is: mocked B')
  });
});

