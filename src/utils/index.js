export const appendSuffix = str => str + '_suffix';

export const appendPrefix = str => 'prefix_' + str;

export const sayHello = () => 'hello';

export const qs = {
  stringify: (obj) => {
    if (obj === null || typeof obj !== 'object') {
      return '';
    }
    return Object.keys(obj).reduce((res, k) => {
      res.push(`${k}=${obj[k]}`);
      return res;
    }, []).join('&');
  }
};
