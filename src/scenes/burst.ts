import { drawBurst } from "../drawing/burst.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/burst.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useBurst = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color)
      .beginFill(state.fill);

    drawBurst(
      graphics,
      window.innerWidth / 2,
      window.innerHeight / 2,
      state.sides,
      state.innerRadius,
      state.outerRadius,
      state.angle,
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 5);
    tweenProperty(state, "innerRadius", 1, 100);
    tweenProperty(state, "outerRadius", 25, 100);
    tweenProperty(state, "angle", 0, 360);
  });

  gui.add(state, "sides", 3, 24, 1).listen();
  gui.add(state, "stroke", 1, 10).listen();
  gui.add(state, "innerRadius", 1, 100).listen();
  gui.add(state, "outerRadius", 1, 100).listen();
  gui.add(state, "angle", 1, 360).listen();
  gui.addColor(state, "color");
  gui.addColor(state, "fill");
};
