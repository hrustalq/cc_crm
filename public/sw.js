if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>a(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"4fffc5caa5906695111ac7e7e18412aa"},{url:"/_next/static/a0FGDVTDBx6dlT8oGq9rU/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/a0FGDVTDBx6dlT8oGq9rU/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-608b843261ad0fa6.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/231-1a52295444b117f5.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/241-ca485af56b8a9e71.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/373-e42a179dad231408.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/71-8c897d945898e86f.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/8e1d74a4-160257142f7cdee8.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/app/(auth)/login/page-09951cc51d65205b.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/app/(auth)/register/page-2b5c29016167862d.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/app/_not-found/page-475b026a6c8d13a8.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/app/layout-de146b5f45763945.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/app/page-fc925b077f7a5627.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/fd9d1056-360e5dd5b3902a99.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/main-0691470998783dd7.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/main-app-9cfb8d0741732ad5.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ef6898c8c35a47a6.js",revision:"a0FGDVTDBx6dlT8oGq9rU"},{url:"/_next/static/css/8f681b0d8d23c322.css",revision:"8f681b0d8d23c322"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.p.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/favicon.ico",revision:"58359e29b1b25398c2b51e61f27499be"},{url:"/logo-128.png",revision:"c9b7a85ff19acb9501e9888f339310e7"},{url:"/logo-144.png",revision:"371f320190a70f19b53bd05c847d405d"},{url:"/logo-152.png",revision:"3c482a8fa7f83531b5d86eab4beffa7a"},{url:"/logo-16.png",revision:"1747e2bf5450f51bbce9b03351e51375"},{url:"/logo-180.png",revision:"1e976e14cd73feaf6d0fc1ca51641d24"},{url:"/logo-192.png",revision:"e81f474fbd7821e219c752b47372125a"},{url:"/logo-256.png",revision:"f145c05ba824e0a987cdf8fcc80cfd03"},{url:"/logo-48.png",revision:"fbee9aa1b2e3a621a507deaaa3ab8283"},{url:"/logo-512.png",revision:"bdd6a5619872e9d6f1d19543c7f52823"},{url:"/logo-64.png",revision:"0b8077f33f57c6396ec03bca54ff0b82"},{url:"/logo-72.png",revision:"7cdbe01f180cc6404e3f5296f047b221"},{url:"/logo-96.png",revision:"9f632bc6da8a1815f2b0da627156cae4"},{url:"/manifest.json",revision:"b4d73d0471a478f07c43c2736da245bb"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
