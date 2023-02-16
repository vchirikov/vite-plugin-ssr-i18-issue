const exportNames$5 = ["Page"];
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$5
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$4 = ["Page"];
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$4
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$3 = ["Page"];
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$3
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$2 = ["onBeforeRender", "prerender"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$2
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$1 = ["render", "passToClient", "onBeforePrerender"];
const __vite_glob_3_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: "Module" }));
const locales = ["en-US", "de-DE", "fr-FR"];
const localeDefault = locales[0];
function extractLocale(url) {
  const urlPaths = url.split("/");
  let locale;
  let urlWithoutLocale;
  const firstPath = urlPaths[1];
  if (locales.filter((locale2) => locale2 !== localeDefault).includes(firstPath)) {
    locale = firstPath;
    urlWithoutLocale = "/" + urlPaths.slice(2).join("/");
  } else {
    locale = localeDefault;
    urlWithoutLocale = url;
  }
  return { locale, urlWithoutLocale };
}
function onBeforeRoute(pageContext) {
  let urlMod = pageContext.urlOriginal;
  const { urlWithoutLocale, locale } = extractLocale(urlMod);
  urlMod = urlWithoutLocale;
  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`.
      // We then use https://vite-plugin-ssr.com/pageContext-anywhere
      // to access `pageContext.locale` in any React/Vue component.
      locale,
      // We overwrite the original URL
      urlOriginal: urlMod
    }
  };
}
const __vite_glob_4_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onBeforeRoute
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["render", "clientRouting", "hydrationCanBeAborted"];
const __vite_glob_5_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/about.page.jsx": () => import("./assets/about.page.56db2578.js"), "/pages/index.page.jsx": () => import("./assets/index.page.545e77ec.js"), "/pages/movies/index.page.jsx": () => import("./assets/movies.page.4010b04b.js") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/about.page.jsx": __vite_glob_1_0, "/pages/index.page.jsx": __vite_glob_1_1, "/pages/movies/index.page.jsx": __vite_glob_1_2 });
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/pages/movies/index.page.server.js": () => import("./assets/movies.page.server.e38d9cf6.js"), "/renderer/_default.page.server.jsx": () => import("./assets/_default.page.server.12b6e309.js") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/pages/movies/index.page.server.js": __vite_glob_3_0, "/renderer/_default.page.server.jsx": __vite_glob_3_1 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.route.js": __vite_glob_4_0 });
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.jsx": __vite_glob_5_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  locales as a,
  isGeneratedFile,
  localeDefault as l,
  neverLoaded,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
