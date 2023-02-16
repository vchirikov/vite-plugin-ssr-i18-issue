import fetch from "node-fetch";
import { a as locales } from "../pageFiles.mjs";
async function onBeforeRender(pageContext) {
  var _a;
  console.log("onBeforeRender", JSON.stringify({
    urlOriginal: pageContext.urlOriginal,
    _urlPristine: pageContext._urlPristine,
    locale: pageContext.locale,
    firstMovie: ((_a = pageContext.pageProps) == null ? void 0 : _a.movies) ? pageContext.pageProps.movies[0] : "undefined",
    _pageContextAlreadyProvidedByPrerenderHook: pageContext["_pageContextAlreadyProvidedByPrerenderHook"] ?? "undefined",
    _prerenderHookFile: pageContext["_prerenderHookFile"] ?? "undefined"
  }, null, 2));
  const movies = await getMovies(pageContext.locale);
  const pageProps = { movies };
  return { pageContext: { pageProps } };
}
async function getMovies(locale) {
  const resp = await fetch("https://star-wars.brillout.com/api/films.json");
  let movies = (await resp.json()).results;
  movies = reducePayload(movies);
  return [
    {
      title: "locale",
      release_date: locale
    },
    ...movies
  ];
}
function reducePayload(movies) {
  return movies.map((movie) => {
    const { title, release_date } = movie;
    return { title, release_date };
  });
}
const prerender = async () => {
  const promises = locales.map(async (locale) => {
    const movies = await getMovies(locale);
    return {
      // NOTE THAT HERE MUST NOT BE SLASH ON THE END
      url: "/movies",
      pageContext: {
        locale,
        pageProps: {
          movies
        }
      }
    };
  });
  return (await Promise.all(promises)).flat();
};
export {
  onBeforeRender,
  prerender
};
