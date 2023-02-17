import fs from 'node:fs';
import path from 'node:path';

import { prerender } from 'vite-plugin-ssr/prerender';

const cwd = process.cwd().replaceAll('\\', '/',);

const options = {
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