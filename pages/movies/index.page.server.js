export { onBeforeRender };

import fetch from 'node-fetch';
import { locales } from '../../locales';


async function onBeforeRender(pageContext) {
  const movies = await getMovies(pageContext.locale);
  const pageProps = { movies };
  return { pageContext: { pageProps } };
}

async function getMovies(locale) {
  const resp = await fetch('https://star-wars.brillout.com/api/films.json');
  let movies = (await resp.json()).results;
  movies = reducePayload(movies);
  return [
    {
      title: 'locale',
      release_date: locale,
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


export const prerender = async () => {
  const promises = locales.map(async locale => {
    const movies = await getMovies(locale);
    return {
        url: `/movies/`,
        pageContext: {
          locale,
          pageProps: {
            movies,
          }
        }
      }
  });
  return (await Promise.all(promises)).flat();
};