# NOTES
1. runs on jsdom by default
2. can install vitest/browser plugin (mostly for component UI)
3. there's an extension to support UI testing
4. CONS: Vitest has no official support from Angular
5. CONS: Angular no official support from Vitest
6. Not enough documentation that discusses Vitest with Angular without using Analog.js

## Config (extra steps)
1. add test-setup.ts to support TestBed
    a. Initialise Testbed
    b. Add zone.js
2. Enable globals: true in vitest.config.ts
3. Change test builder of test to "@analogjs/platform:vitest"
4. Update tsconfig.test.json
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
5. Add type: "module" to package.json

## Reference
1. https://analogjs.org/docs/features/testing/vitest
2. https://vitest.dev/guide/


# Gotchas
1. Stack trace doesn't point to the actual failing assertion
2. GOOD! Can use expect and it instead of `test` and `assert`

# FEATURES
## MOCKING
