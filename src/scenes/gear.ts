import { drawGear } from "../drawing/gear.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/gear.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useGear = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color)
      .beginFill(state.fill);

    drawGear(
      graphics,
      window.innerWidth / 2,
      window.innerHeight / 2,
      state.sides,
      state.innerRadius,
      state.outerRadius,
      state.angle,
      state.holeSides,
      state.holeRadius,
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 5);
    tweenProperty(state, "innerRadius", 1, 100);
    tweenProperty(state, "outerRadius", 25, 100);
    tweenProperty(state, "holeRadius", 0, 25);
    tweenProperty(state, "angle", 0, 360);
  });

  gui.add(state, "sides", 3, 24, 1);
  gui.add(state, "holeSides", 3, 10, 1);
  gui.add(state, "stroke", 1, 10).listen();
  gui.add(state, "innerRadius", 1, 100).listen();
  gui.add(state, "outerRadius", 1, 100).listen();
  gui.add(state, "holeRadius", 1, 100).listen();
  gui.add(state, "angle", 1, 360).listen();
  gui.addColor(state, "color");
  gui.addColor(state, "fill");
};
