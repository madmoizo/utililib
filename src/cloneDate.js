/**
 * Clone a date instance into a new date instance
 * @param {Date} date
 * @returns {Date}
 */
export default function cloneDate (date) {
  return new Date(date.valueOf())
}