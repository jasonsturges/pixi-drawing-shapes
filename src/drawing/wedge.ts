import { Graphics } from "pixi.js";

export function drawWedge(
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
  let ax = x + Math.cos((startAngle / 180) * Math.PI) * radius;
  let ay = y + Math.sin((-startAngle / 180) * Math.PI) * yRadius;
  let angleMid, bx, by, cx, cy;

  target.moveTo(x, y);
  target.lineTo(ax, ay);

  for (let i = 0; i < segs; ++i) {
    angle += theta;
    angleMid = angle - theta / 2;
    bx = x + Math.cos(angle) * radius;
    by = y + Math.sin(angle) * yRadius;
    cx = x + Math.cos(angleMid) * (radius / Math.cos(theta / 2));
    cy = y + Math.sin(angleMid) * (yRadius / Math.cos(theta / 2));
    target.quadraticCurveTo(cx, cy, bx, by);
  }

  target.lineTo(x, y);
  target.closePath();
}
