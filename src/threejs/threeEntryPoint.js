export default (container, json) => {
  // eslint-disable-next-line
  const canvas = createCanvas(document, container);

  function createCanvas(document, container) {
    const canvas = document.createElement("canvas");
    container.appendChild(canvas);
    return canvas;
  }
};
