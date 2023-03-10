import react from '@vitejs/plugin-react';
import ssr from '@vchirikov/vite-plugin-ssr/plugin';

export default {
  plugins: [react(), ssr({
    prerender: {
      parallel: 24,
      disableAutoRun: true
    }
  })]
};
