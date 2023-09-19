'use strict'

const path = require('path')
const fs = require('fs')
const { glob } = require('glob');
const cwd = path.resolve('assets');
const SVGO = require('./node_modules/svgo')

const svgo = new SVGO({
  js2svg: { pretty: true, indent: '  ' },
  plugins: [
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: 'svg:class' } }
  ]
});

(async function () {
  // Find SVG files recursively via `glob`
  const files = await glob('**/*.svg', { cwd: cwd });

  // Optimize each SVG
  files.forEach(function (file) {
    const data = fs.readFileSync(path.join(cwd, file), { encoding: 'utf-8' });
    svgo.optimize(data, { path: cwd }).then(function (result) {
      fs.writeFileSync(path.join(cwd, file), result.data);
    });
  });
})();
