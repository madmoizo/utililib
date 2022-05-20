/**
 * Import script on runtime
 */
export default function addHeadTag (tagName, attributes, onload = null) {
  // Do not add an already existing id
  if (
    attributes.id &&
    document.querySelector(`#${attributes.id}`)
  ) {
    return null
  }

  const el = document.createElement(tagName)
  document.head.appendChild(el)
 
  if (onload) {
    el.addEventListener('load', onload)
  }
  
  for (const attributeName in attributes) {
    el[attributeName] = attributes[attributeName]
  }
  
  return el
}