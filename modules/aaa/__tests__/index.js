'use strict';

// jest.mock('../config');

import a from "../src/index";

describe('aaa', () => {
  test('aaa', () => {
    expect(a.doit()).toBe('')
    // const FileSummarizer = require('../src/FileSummarizer');
    // const fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
    //   '/path/to',
    // );
    //
    // expect(fileSummary.length).toBe(2);
  });
});

