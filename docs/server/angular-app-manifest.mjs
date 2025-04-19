
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/mini-tienda/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/mini-tienda"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/mini-tienda/productos"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/mini-tienda/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/mini-tienda",
    "route": "/Program%20Files/Git/mini-tienda/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5230, hash: '2c3df202ddb099e4e6e3a0d34f919bf2f93dd03ec2d53c01cc490498d5c6db4b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1202, hash: '73b47b31723719b2fcb566c8883381c2c7e7770842ff44654c0241fbfa6262de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-R7JO7PG3.css': {size: 314546, hash: 'jb+nSh1Y6vw', text: () => import('./assets-chunks/styles-R7JO7PG3_css.mjs').then(m => m.default)}
  },
};
