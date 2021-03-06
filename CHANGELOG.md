# 2.0.0

- breaking: rename `getImageFromBase64` into `base64ToImageElement`
- breaking: rename `imageToBase64` into `transformImage`. remove `extension` option, add `mime` option
- breaking: rename `transformBase64Image` into `transformImageFromBase64`
- feat: add `getFileMime`

# 1.18.0

- feat: add `getImageFromBase64`
- feat: add `transformBase64Image`

# 1.17.0

- feat: add `parseBase64`
- feat: remove `getBase64Extension` (performance issue on big files)

# 1.16.0

- feat: add `getBase64Extension`

# 1.15.0

- feat: merge `veryLastIndexOf` in `substringUntilEnd`

# 1.14.0

- feat: add `generateDigicode`
- feat: add `parseCookieHeader`
- feat: add `substringUntil`
- feat: add `substringUntilEnd`

# 1.13.0

- feat: add `veryLastIndexOf`

# 1.12.0

- feat: add `addEventListener`. the returned value is a function which will remove the event listener.

# 1.11.0

- feature: add `snakeToCamel`
- feature(imageToBase64): add `extension` option. If the extension cannot be retrieved from the `src`, you can specify it manually.

# 1.10.0

- feature: add `getDeepValue`

# 1.9.0

- feature: add `getFileExtension`
- refactor(imageToBase64): use `getFileExtension` for a more accurate extension detection

# 1.8.0

- feature: add `stringifySearchParams`
- build: add dependabot

# 1.7.1

- chore: add the librairy logo (from @meyli27)

# 1.7.0

- feature(typecheck): add new type `any`

# 1.6.0

- refactor(typecheck): remove `options` second argument
- feature(has): support any value not only object

# 1.4.0

- fix(undashUUID): replace generic regex by uuid pattern

# 1.0.0

- feature: add `waitUntil`
- feature: add `undashUUID`
- feature: add `unaccent`
- feature: add `redashUUID`
- feature: add `kebabToCamel`
- feature: add `isUUID`
- feature: add `isFalsy`
- feature: add `imageToBase64`
- feature: add `capitalizeFirstLetter`
- feature: add `addHeadTag`
- feature: add `typecheck`
- feature: add `prependZero`
- feature: add `parseDate`
- feature: add `joinPath`
- feature: add `isUrl`
- feature: add `isTrue`
- feature: add `isString`
- feature: add `isObject`
- feature: add `isNullish`
- feature: add `isNull`
- feature: add `isIp`
- feature: add `isInteger`
- feature: add `isNumber`
- feature: add `isFunction`
- feature: add `isFile`
- feature: add `isFalse`
- feature: add `isEmail`
- feature: add `isDate`
- feature: add `isBoolean`
- feature: add `isBase64`
- feature: add `isArray`
- feature: add `has`
