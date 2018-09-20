/**
 * This is common type called LooseObject. It's simple definition of object
 * with properties of some type (include any)
 */
interface ILooseObject<T = any> {
  [key: string]: T;
}

/**
 * Extends widnow object by Delog instance
 */
interface IDelogWindow extends Window {
  delog?: any;
}

/**
 * Extends global object by Delog instance
 */
interface IDelogGlobal extends NodeJS.Global {
  delog?: any;
}

export {
  IDelogGlobal,
  IDelogWindow,
  ILooseObject,
};
