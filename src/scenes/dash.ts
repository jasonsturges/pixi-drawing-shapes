import { drawDash } from "../drawing/dash.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/dash.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useDash = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color);

    drawDash(
      graphics,
      state.x1,
      state.y1,
      state.x2,
      state.y2,
      state.dashLength,
      state.spaceLength,
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 10);
    tweenProperty(state, "x1", 1, window.innerWidth);
    tweenProperty(state, "y1", 1, window.innerHeight);
    tweenProperty(state, "x2", 1, window.innerWidth);
    tweenProperty(state, "y2", 1, window.innerHeight);
    tweenProperty(state, "dashLength", 0, 48);
    tweenProperty(state, "spaceLength", 0, 48);
  });

  gui.add(state, "stroke", 1, 10).listen();
  gui.add(state, "dashLength", 1, 48).listen();
  gui.add(state, "spaceLength", 1, 48).listen();
  gui.addColor(state, "color");
};
