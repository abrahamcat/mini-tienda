
export default {
  basePath: 'C:/Program Files/Git/mini-tienda',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
