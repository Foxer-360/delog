/**
 * This is common type called LooseObject. It's simple definition of object
 * with properties of some type (include any)
 */
interface ILooseObject<T = any> {
  [key: string]: T;
}

export {
  ILooseObject,
};
