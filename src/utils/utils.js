export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const getSource = (imageObject) => {
  if (imageObject) {
    if (imageObject.mp4) {
      return {
        type: "mp4",
        src: imageObject.mp4,
        url: imageObject.url
      }
    } else if (imageObject.webp) {
      return {
        type: "webp",
        src: imageObject.webp,
        url: imageObject.url
      }

    }
    return {
      type: "gif",
      src: imageObject.url,
      url: imageObject.url,
    }
  }
}
