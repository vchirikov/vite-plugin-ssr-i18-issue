import{_ as n,g as p,k as d,n as c,o,c as u,A as _,q as f,e as v,K as y,J as h,I as x}from"./chunk-e82e060b.js";const r={},E={},F={},m={},b=[],C={},L=!0,P=[],w={},R=null,I=Object.assign({"/pages/about.page.jsx":()=>n(()=>import("./pages/about.page.b9549263.js"),["assets/pages/about.page.b9549263.js","assets/chunk-8daf3ee0.js","assets/chunk-b524e103.js","assets/chunk-58df3efb.js"]),"/pages/index.page.jsx":()=>n(()=>import("./pages/index.page.60153e7f.js"),["assets/pages/index.page.60153e7f.js","assets/chunk-8daf3ee0.js","assets/chunk-58df3efb.js","assets/chunk-a14f0fab.js","assets/chunk-b524e103.js"]),"/pages/movies/index.page.jsx":()=>n(()=>import("./pages/movies/index.page.b4a33d5f.js"),["assets/pages/movies/index.page.b4a33d5f.js","assets/chunk-8daf3ee0.js","assets/chunk-b524e103.js","assets/chunk-58df3efb.js"])}),O={...I};r[".page"]=O;const j=Object.assign({"/renderer/_default.page.client.jsx":()=>n(()=>import("./renderer/_default.page.client.f0d4e891.js"),["assets/renderer/_default.page.client.f0d4e891.js","assets/chunk-8daf3ee0.js","assets/chunk-a14f0fab.js","assets/chunk-58df3efb.js","assets/_default.page.client.dad88554.css"])}),A={...j};r[".page.client"]=A;const z=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:L,neverLoaded:C,pageConfigGlobal:w,pageConfigs:P,pageFilesEager:E,pageFilesExportNamesEager:m,pageFilesExportNamesLazy:F,pageFilesLazy:r,pageFilesList:b,plusFilesGlob:R},Symbol.toStringTag,{value:"Module"}));p(z);const g=d({withoutHash:!0});async function H(){const e=c();return o(e,{isHydration:!0,isBackwardNavigation:null}),o(e,await T(e._pageId)),S(),e}function S(){const e=d({withoutHash:!0});u(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function T(e){const a={},{pageFilesAll:t,pageConfigs:l}=await _(!0);return o(a,{_pageFilesAll:t,_pageConfigs:l}),o(a,await f(t,l,e)),t.filter(s=>s.fileType!==".page.server").forEach(s=>{var i;v(!(!((i=s.fileExports)===null||i===void 0)&&i.onBeforeRender),`\`export { onBeforeRender }\` of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}y();B();async function B(){var e,a;const t=await H();await h(t,!1),x(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}