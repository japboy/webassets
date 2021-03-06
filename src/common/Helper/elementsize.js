/**
 * Get width & height of hidden element
 */
export default function elementSize(el) {
  /* eslint-disable no-param-reassign */
  const style = global.getComputedStyle(el);
  const styleDisplay = style.display;
  const styleMaxHeight = parseInt(style.maxHeight.replace(/(px|%)/, ''), 10);
  const styleMaxWidth = parseInt(style.maxWidth.replace(/(px|%)/, ''), 10);

  const size = { height: 0, width: 0 };

  // if its not hidden we just return normal size
  if (styleDisplay !== 'none' && styleMaxHeight !== '0') {
    size.height = el.offsetHeight;
  }
  if (styleDisplay !== 'none' && styleMaxWidth !== '0') {
    size.width = el.offsetWidth;
  }
  if (styleDisplay !== 'none' && styleMaxHeight !== '0' && styleMaxWidth !== '0') {
    return size;
  }

  // the element is hidden so:
  // making the el block so we can meassure its height but still be hidden
  el.style.position = 'absolute';
  el.style.visibility = 'hidden';
  el.style.display = 'block';

  size.height = el.offsetHeight;
  size.width = el.offsetWidth;

  // reverting to the original values
  el.style.display = '';
  el.style.position = '';
  el.style.visibility = '';

  return size;
}
