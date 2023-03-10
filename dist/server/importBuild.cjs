{
  const { setLoaders } = require('../../node_modules/.pnpm/@vchirikov+vite-plugin-ssr@0.4.85_vite@4.1.1/node_modules/@vchirikov/vite-plugin-ssr/dist/cjs/node/plugin/plugins/importBuild/loadBuild.js');
  setLoaders({
    pageFiles: () => import('./pageFiles.js'),
    clientManifest: () => require('../client/manifest.json'),
    pluginManifest: () => require('../client/vite-plugin-ssr.json'),
  });
}
