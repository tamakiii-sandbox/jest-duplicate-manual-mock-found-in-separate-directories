# duplicate manual mock found in separate directories

- https://github.com/facebook/jest/issues/2070

~~~sh
❯ yarn test
yarn run v1.9.4
$ jest
jest-haste-map: duplicate manual mock found:
  Module name: index
  Duplicate Mock path: /Users/d-tamaki/Sites/tamakiii-sandbox/jest-duplicate-manual-mock-found-in-separate-directories/moduels/bbb/__mocks__/index.js
This warning is caused by two manual mock files with the same file name.
Jest will use the mock file found in:
/Users/d-tamaki/Sites/tamakiii-sandbox/jest-duplicate-manual-mock-found-in-separate-directories/moduels/bbb/__mocks__/index.js
 Please delete one of the following two files:
 /Users/d-tamaki/Sites/tamakiii-sandbox/jest-duplicate-manual-mock-found-in-separate-directories/moduels/aaa/__mocks__/index.js
/Users/d-tamaki/Sites/tamakiii-sandbox/jest-duplicate-manual-mock-found-in-separate-directories/moduels/bbb/__mocks__/index.js
~~~
