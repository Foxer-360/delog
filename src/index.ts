import { Delog, IDelogDefinition } from '@source/delog';

// tslint:disable-next-line:no-any
const delog = new (Delog as any)() as IDelogDefinition;

export {
  IDelogDefinition,
};

// This is used for modern JS and TS
export default delog;

// This is used for webpack, to enable globally add directly delog instance
module.exports = delog;
