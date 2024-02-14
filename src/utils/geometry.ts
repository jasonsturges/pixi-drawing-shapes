/**
 * Convert radians to degrees
 */
export const deg2rad = (angle: number): number => {
  angle = !isNaN(angle) ? angle : 0;

  return (angle * Math.PI) / 180;
};

/**
 * Convert degrees to radians
 */
export const rad2deg = (angle: number): number => {
  angle = !isNaN(angle) ? angle : 0;

  return (angle * 180) / Math.PI;
};
