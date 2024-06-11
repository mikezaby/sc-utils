/**
 * Check if the value is a valid URL
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isURL } from '@ircam/sc-utils';
 * isURL('http://sub.my-site.org/abcd?test=123');
 * // > true
 */
export function isURL(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

