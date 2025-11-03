function createElement(tag, property = {}) {
  return Object.assign(document.createElement(tag), property);
}

export { createElement };
