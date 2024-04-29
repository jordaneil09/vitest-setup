// /// <reference types="vitest" />
// import { defineConfig } from 'vite';
// import angular from '@analogjs/vite-plugin-angular';

// export default defineConfig(({ mode }) => ({
//   plugins: [angular()],
//   test: {
//     setupFiles: 'src/test-setup.ts',
//     globals: true,
//     environment: 'jsdom'
//     // browser: {
//     //     enabled: true,
//     //     name: 'chromium',
//     //     headless: false, // set to true in CI
//     //     provider: 'playwright',
//     // }
//   },
//   define: {
//     'import.meta.vitest': true,
//   }
// }))

import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    setupFiles: 'src/test-setup.ts',
    globals: true,
    environment: 'jsdom'
  }
})