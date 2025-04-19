
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mini-mercado/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mini-mercado"
  },
  {
    "renderMode": 2,
    "route": "/mini-mercado/productos"
  },
  {
    "renderMode": 2,
    "route": "/mini-mercado/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/mini-mercado",
    "route": "/mini-mercado/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5211, hash: '14de30839c638cd1acf08b7fcc8aaff873d8f1636be4badf55b7fd715621ef77', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1183, hash: '9902b21989b09c4213d873de80f6233fb3573f2b29260cc12a1476ad7696c4b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 19005, hash: 'd5df4953f00c0fd6e559f6c5b9907bc7389e325ece6a5538eadd5d19bca1a7c1', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 24777, hash: '7289ede799098fc9ecc8b62167edc639050ac0988a38083282d8f9138de3b480', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 19002, hash: '949a3935f37b642c9b2a1c8ac8e5a706040aa109dc2aa3b04cbf0d8d61783012', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-R7JO7PG3.css': {size: 314546, hash: 'jb+nSh1Y6vw', text: () => import('./assets-chunks/styles-R7JO7PG3_css.mjs').then(m => m.default)}
  },
};
