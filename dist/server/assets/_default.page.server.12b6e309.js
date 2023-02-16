import { a as jsx, P as PageContextProvider, j as jsxs } from "./chunk-14afb3af.js";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { L as Link } from "./chunk-a126d9b2.js";
import { l as localeDefault, a as locales } from "../pageFiles.mjs";
import "react/jsx-runtime";
const PageShell$1 = "";
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsxs(Sidebar, { children: [
      /* @__PURE__ */ jsx(Link, { className: "navitem", href: "/", children: "Home" }),
      /* @__PURE__ */ jsx(Link, { className: "navitem", href: "/about", children: "About" }),
      /* @__PURE__ */ jsx(Link, { className: "navitem", href: "/movies", children: "Movies" })
    ] }),
    /* @__PURE__ */ jsx(Content, { children })
  ] }) }) });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        maxWidth: 900,
        margin: "auto"
      },
      children
    }
  );
}
function Sidebar({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        padding: 20,
        paddingTop: 42,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em"
      },
      children
    }
  );
}
function Content({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh"
      },
      children
    }
  );
}
const passToClient = ["pageProps", "locale"];
function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
function onBeforePrerender(prerenderContext) {
  const pageContexts = [];
  prerenderContext.pageContexts.forEach((pageContext) => {
    pageContexts.push({
      ...pageContext,
      locale: localeDefault
    });
    locales.filter((locale) => locale !== localeDefault).forEach((locale) => {
      pageContexts.push({
        ...pageContext,
        urlOriginal: `/${locale}${pageContext.urlOriginal}`,
        locale
      });
    });
  });
  return {
    prerenderContext: {
      pageContexts
    }
  };
}
export {
  onBeforePrerender,
  passToClient,
  render
};
