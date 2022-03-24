const memoize = (func, time) => {
  let result = null;
  let cacheInvalidateTime = 0;

  return async function (...args) {
    if (result === null || Date.now() > cacheInvalidateTime) {
      result = await func(...args);
      cacheInvalidateTime = Date.now() + time;
      return result;
    }
    return result;
  };
};
