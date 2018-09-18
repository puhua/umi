export default {
  plugins: [
    [
      '../../lib',
      {
        // mobile
        hd: true,
        fastClick: true,

        // dev boost
        dll: false,
        hardSource: false,

        // performace
        pwa: {},
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './Loading.js',
        },
        library: 'react',

        // misc
        dva: false,
        routes: {
          exclude: [/b\//],
        },
        polyfills: [],
        antd: true,
        title: '默认标题',

        headScripts: [{ content: `window.scripts = ['headScript1'];` }],
        scripts: [
          { content: `window.scripts.push('script1');` },
          { src: '/script2.js' },
        ],
        metas: [{ id: 'meta1', foo: 'bar' }],
        links: [{ id: 'link1', foo: 'bar' }],
      },
    ],
  ],
};
