/**
 * Convert an array of objects to a Map
 * @param {EventTarget} element
 * @param {string} event
 * @param {function} listener
 * @param {boolean | object} options
 * @return {function} an handler which will remove the event on call
 */
export default function addEventListener (element, event, listener, options) {
  element.addEventListener(event, listener, options)
  return () => element.removeEventListener(event, listener, options)
}
