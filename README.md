# Customized date-fns-tz

This repo contains a copy and pasted TypeScript fork of `date-fns-tz@2.0.0` which contains functions used by rscom-ui which are compatible with v3 of date-fns.

The purpose was because `date-fns@2.0.0` is not compatible with `date-fns-tz@2.0.0` and we needed to use `date-fns@3.0.0` which uses ES module syntax that solved a warning from `date-fns@2.0.0`.

If `date-fns-tz` gets upgraded to v3.0.0 and is compatible with `date-fns@3.0.0`, then this repo can be deprecated and the new `date-fns-tz@3.0.0` can be used instead.

**List of changes:**
- Changed .js files to .ts files
- Made some function signatures contain optional parameters to be compatible with actual usage in rscom-ui
- Apply linting rules based on rscom-ui's eslint config
