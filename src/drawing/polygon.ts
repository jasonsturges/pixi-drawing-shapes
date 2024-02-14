import { Graphics } from "pixi.js";

export function drawPolygon(
  target: Graphics,
  x: number,
  y: number,
  sides: number,
  radius: number,
  angle: number = 0,
) {
  let step = (Math.PI * 2) / sides;
  let start = (angle / 180) * Math.PI;
  let n, dx, dy;

  target.moveTo(x + Math.cos(start) * radius, y - Math.sin(start) * radius);

  for (n = 1; n <= sides; ++n) {
    dx = x + Math.cos(start + step * n) * radius;
    dy = y - Math.sin(start + step * n) * radius;
    target.lineTo(dx, dy);
  }

  target.closePath();
}
