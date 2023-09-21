'use strict'

const fs = require('fs');

fs.writeFileSync('dist/ts/public-api.ts',
  `export * from './icons.constants';
export * from './icons.object';
`);

fs.writeFileSync('dist/ts/index.ts',
  `export * from './public-api';
`);
