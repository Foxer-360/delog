# DeLog

A simple tool for debugging and logging.

## Useful setup of DeLog

Because debugging is necessary everywhere in the code, it's very annoying import this package manually, like that

```TypeScript
import delog from '@foxer360/delog';

delog('Debug message');
```

So if you want everywhere just call `delog('Debug message')` without importing the package, then add this package into **webpack**. This can be done using **ProvidePlugin**.

In `webpack.config.js`, under **plugins** add this code

```JavaScript
module.exports = {
  ...
  plugins: [
    ...,
    new webpack.ProvidePlugin({
      delog: '@foxer360/delog',
    }),
  ],
  ...
}
```

Also if you are using *TypeScript*, then you need globally define this module. It's simple. In you `*.d.ts` file (if you have no one, create for example `global.d.ts` in the root of your project) add this definition

```TypeScript
import { IDelogDefinition } from '@foxer360/delog';

declare global {
  export const delog: IDelogDefinition;
}
```
