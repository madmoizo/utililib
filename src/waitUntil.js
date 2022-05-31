/**
 * Wait for something
 * @param {function} resolveCondition
 * @param {object} options
 * @param {number} [options.timeout=30000] -in ms
 * @param {number} [options.interval=50] - in ms
 */
export default function waitUntil (resolveCondition, options = {}) {
  const timeout = options.timeout ?? 30000
  const interval = options.interval ?? 50

  // Resolve immediately if the condition is already fullfiled
  if (resolveCondition()) {
    return Promise.resolve()
  }

  // Or wait until it happens
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId)
      reject(new Error('condition not resolved before timeout'))
    }, timeout)

    const intervalId = setInterval(() => {
      if (resolveCondition()) {
        clearTimeout(timeoutId)
        clearInterval(intervalId)
        resolve()
      }
    }, interval)
  })
}
