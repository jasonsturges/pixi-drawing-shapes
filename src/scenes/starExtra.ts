import "@pixi/graphics-extras";
import { deg2rad } from "../utils/geometry.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/starExtra.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useStarExtra = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color)
      .beginFill(state.fill);

    graphics.drawStar?.(
      window.innerWidth / 2, //
      window.innerHeight / 2,
      state.points,
      state.innerRadius,
      state.outerRadius,
      deg2rad(state.angle),
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 5);
    tweenProperty(state, "innerRadius", 1, 100);
    tweenProperty(state, "outerRadius", 1, 100);
    tweenProperty(state, "angle", 0, 360);
  });

  gui.add(state, "points", 3, 24, 1);
  gui.add(state, "stroke", 1, 10).listen();
  gui.add(state, "innerRadius", 1, 100).listen();
  gui.add(state, "outerRadius", 1, 100).listen();
  gui.add(state, "angle", 1, 360).listen();
  gui.addColor(state, "color");
  gui.addColor(state, "fill");
};
