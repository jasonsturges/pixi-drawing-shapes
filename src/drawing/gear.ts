import { Graphics } from "pixi.js";

export function drawGear(
  target: Graphics,
  x: number,
  y: number,
  sides: number,
  innerRadius: number = 80,
  outerRadius: number = 4,
  angle: number = 0,
  holeSides: number = 2,
  holeRadius: number = 0,
) {
  let step = (Math.PI * 2) / sides;
  let qtrStep = step / 4;
  let start = (angle / 180) * Math.PI;
  let n, dx, dy;

  target.moveTo(
    x + Math.cos(start) * outerRadius,
    y - Math.sin(start) * outerRadius,
  );

  for (n = 1; n <= sides; ++n) {
    dx = x + Math.cos(start + step * n - qtrStep * 3) * innerRadius;
    dy = y - Math.sin(start + step * n - qtrStep * 3) * innerRadius;
    target.lineTo(dx, dy);
    dx = x + Math.cos(start + step * n - qtrStep * 2) * innerRadius;
    dy = y - Math.sin(start + step * n - qtrStep * 2) * innerRadius;
    target.lineTo(dx, dy);
    dx = x + Math.cos(start + step * n - qtrStep) * outerRadius;
    dy = y - Math.sin(start + step * n - qtrStep) * outerRadius;
    target.lineTo(dx, dy);
    dx = x + Math.cos(start + step * n) * outerRadius;
    dy = y - Math.sin(start + step * n) * outerRadius;
    target.lineTo(dx, dy);
  }
  target.closePath();

  step = (Math.PI * 2) / holeSides;

  target.moveTo(
    x + Math.cos(start) * holeRadius,
    y - Math.sin(start) * holeRadius,
  );

  for (n = 1; n <= holeSides; ++n) {
    dx = x + Math.cos(start + step * n) * holeRadius;
    dy = y - Math.sin(start + step * n) * holeRadius;
    target.lineTo(dx, dy);
  }

  target.closePath();
}
