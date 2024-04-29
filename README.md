# Setup
1. add test-setup.ts to support TestBed
    a. Initialise Testbed
    b. Add zone.js

# NOTES
2. runs on jsdom by default
3. can install vitest/browser plugin (mostly for component UI)
4. there's an extension to support UI testing
5. CONS: Vitest has no official support from Angular
6. CONS: Angular no official support from Vitest
7. Not enough documentation that discusses Vitest with Angular without using Analog.js

## Config (extra steps)
1. Enable globals: true in vitest.config.ts
2. Change test builder of test to "@analogjs/platform:vitest"
3. Update tsconfig.test.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "target": "es2016",
    "types": ["vitest/globals", "node"]
  },
  "files": ["src/test-setup.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
4. Add type: "module" to package.json

## Reference
1. https://analogjs.org/docs/features/testing/vitest
2. https://vitest.dev/guide/


# Gotchas
1. Stack trace doesn't point to the actual failing assertion
2. Can use expect and it

# FEATURES
## MOCKING
