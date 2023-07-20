// Get coordinate boundary
export default function ({
  value, min = 0, max, axis = 'x',
}) {
  const rect = window.data.move.getBoundingClientRect();
  if (window.data.moveInWindow) {
    if (value <= min) {
      return min;
    }
    const valueOffset = (axis === 'x' ? rect.width : rect.height);
    if (value + valueOffset >= max) {
      return max - valueOffset;
    }
    return value;
  }
  return value;
}
