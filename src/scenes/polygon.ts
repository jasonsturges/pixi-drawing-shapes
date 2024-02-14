import { drawPolygon } from "../drawing/polygon.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/polygon.ts";
import { tweenProperty } from "../utils/tween.ts";

export const usePolygon = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color)
      .beginFill(state.fill);

    drawPolygon(
      graphics,
      window.innerWidth / 2,
      window.innerHeight / 2,
      state.sides,
      state.radius,
      state.angle,
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 5);
    tweenProperty(state, "radius", 0, 100);
    tweenProperty(state, "angle", 0, 360);
  });

  gui.add(state, "sides", 3, 24, 1);
  gui.add(state, "stroke", 1, 10).listen();
  gui.add(state, "radius", 1, 100).listen();
  gui.add(state, "angle", 1, 360).listen();
  gui.addColor(state, "color");
  gui.addColor(state, "fill");
};
