import fs from 'node:fs';
import path from 'node:path';

import { prerender } from '@vchirikov/vite-plugin-ssr/prerender';
import { extractLocale } from './locales/index.js';

const cwd = process.cwd().replaceAll('\\', '/',);

function normalizeUrl(url) {
  return '/' + url.split('/').filter(Boolean).join('/')
}

const options = {
  pageContextMatcher: (ctx, url) => {
    const { locale, urlWithoutLocale } = extractLocale(url);
    return ctx.locale === locale && normalizeUrl(ctx.urlOriginal) === normalizeUrl(urlWithoutLocale);
  },
  onPagePrerender: async (pageContext) => {
    const { filePath, fileContent } = pageContext._prerenderResult;
    console.log('Writing...', filePath.replace(cwd, ''), "pageContext:\n",
      JSON.stringify({
        "locale": pageContext.locale ?? 'undefined',
        "pageProps.movies[0]": pageContext.pageProps?.movies ? pageContext.pageProps.movies[0].release_date : 'undefined',
        _pageContextAlreadyProvidedByPrerenderHook: pageContext['_pageContextAlreadyProvidedByPrerenderHook'] ?? 'undefined',
        _prerenderHookFile: pageContext['_prerenderHookFile'] ?? 'undefined'
      }, null, 2)
    );
    const { writeFile, mkdir } = fs.promises;
    await mkdir(path.posix.dirname(filePath), { recursive: true });
    await writeFile(filePath, fileContent);
  },
};

await prerender(options);