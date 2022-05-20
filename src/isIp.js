/**
 * Check if a value is an IPv4
 * @param {any} value
 * @return {boolean}
 */
export default function isIp (value) {
  return /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/g.test(value)
}
  