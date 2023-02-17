import { j as jsxs, F as Fragment, a as jsx } from "./chunk-14afb3af.js";
import { useState } from "react";
import { a as locales } from "../pageFiles.js";
import { L as Link } from "./chunk-43819f0b.js";
import { L as LocaleText } from "./chunk-1ce2a1ab.js";
import "react/jsx-runtime";
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: /* @__PURE__ */ jsx(LocaleText, { children: "Welcome" }) }),
    /* @__PURE__ */ jsx(LocaleText, { children: "This page is" }),
    ":",
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(LocaleText, { children: "Localized" }),
        ". ",
        /* @__PURE__ */ jsx(LocaleText, { children: "Change language" }),
        ":",
        " ",
        locales.map((locale) => /* @__PURE__ */ jsx(Link, { locale, href: "/", style: { marginLeft: 7 }, children: locale }, locale))
      ] }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(LocaleText, { children: "Rendered to HTML" }) }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(LocaleText, { children: "Interactive" }),
        " ",
        /* @__PURE__ */ jsx(Counter, {})
      ] })
    ] })
  ] });
}
function Counter() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCount((count2) => count2 + 1), children: [
    /* @__PURE__ */ jsx(LocaleText, { children: "Counter" }),
    " ",
    count
  ] });
}
export {
  Page
};
