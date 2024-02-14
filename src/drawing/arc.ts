import { Graphics } from "pixi.js";

export function drawArc(
  target: Graphics,
  x: number,
  y: number,
  radius: number,
  arc: number,
  startAngle: number = 0,
  yRadius: number = radius,
) {
  let segs = Math.ceil(Math.abs(arc) / 45);
  let segAngle = arc / segs;
  let theta = -(segAngle / 180) * Math.PI;
  let angle = -(startAngle / 180) * Math.PI;
  let ax = x - Math.cos(angle) * radius;
  let ay = y - Math.sin(angle) * yRadius;
  let angleMid, bx, by, cx, cy;

  if (segs > 0) {
    target.moveTo(x, y);
    for (let i = 0; i < segs; ++i) {
      angle += theta;
      angleMid = angle - theta / 2;
      bx = ax + Math.cos(angle) * radius;
      by = ay + Math.sin(angle) * yRadius;
      cx = ax + Math.cos(angleMid) * (radius / Math.cos(theta / 2));
      cy = ay + Math.sin(angleMid) * (yRadius / Math.cos(theta / 2));
      target.quadraticCurveTo(cx, cy, bx, by);
    }
  }
}
