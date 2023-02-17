import { j as jsxs, F as Fragment, a as jsx } from "./chunk-14afb3af.js";
import "react";
import { L as LocaleText } from "./chunk-1ce2a1ab.js";
import "react/jsx-runtime";
import "../pageFiles.js";
function Page(pageProps) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("h1", { children: [
      "Star Wars ",
      /* @__PURE__ */ jsx(LocaleText, { children: "Movies" })
    ] }),
    /* @__PURE__ */ jsx(MovieList, { movies: pageProps.movies })
  ] });
}
function MovieList({ movies }) {
  return /* @__PURE__ */ jsx("ol", { children: movies.map(({ title, release_date }, i) => /* @__PURE__ */ jsxs("li", { children: [
    title,
    " (",
    release_date,
    ")"
  ] }, i)) });
}
export {
  Page
};
