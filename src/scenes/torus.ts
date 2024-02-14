import "@pixi/graphics-extras";
import { deg2rad } from "../utils/geometry.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/torus.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useTorus = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color)
      .beginFill(state.fill);

    graphics.drawTorus?.(
      window.innerWidth / 2, //
      window.innerHeight / 2,
      state.innerRadius,
      state.outerRadius,
      deg2rad(state.startArc),
      deg2rad(state.endArc),
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 5);
    tweenProperty(state, "innerRadius", 1, 100);
    tweenProperty(state, "outerRadius", 25, 100);
    tweenProperty(state, "startArc", 0, 360);
    tweenProperty(state, "endArc", 0, 360);
  });

  gui.add(state, "stroke", 1, 10).listen();
  gui.add(state, "innerRadius", 1, 100).listen();
  gui.add(state, "outerRadius", 1, 100).listen();
  gui.add(state, "startArc", 1, 360).listen();
  gui.add(state, "endArc", 1, 360).listen();
  gui.addColor(state, "color");
  gui.addColor(state, "fill");
};
