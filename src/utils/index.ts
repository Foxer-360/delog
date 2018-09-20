/**
 * Simple helper to check, if window object exists
 *
 * @return {boolean}
 */
const isWindow = (): boolean => {
  if (!window) {
    return false;
  }

  if (window === undefined || window === null) {
    return false;
  }

  return true;
};

/**
 * Simple helper to check if global object exists
 *
 * @return {boolean}
 */
const isGlobal = (): boolean => {
  if (!global) {
    return false;
  }

  if (global === undefined || global === null) {
    return false;
  }

  return true;
};

export {
  isGlobal,
  isWindow,
};
