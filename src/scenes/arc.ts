import { drawArc } from "../drawing/arc.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/arc.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useArc = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color);

    drawArc(
      graphics,
      window.innerWidth / 2,
      window.innerHeight / 2,
      state.radius,
      state.arc,
      state.startAngle,
      state.yRadius,
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 10);
    tweenProperty(state, "radius", 0, 100);
    tweenProperty(state, "arc", -360, 360);
    tweenProperty(state, "startAngle", 0, 360);
    tweenProperty(state, "yRadius", 0, 100);
  });

  gui.add(state, "stroke", 1, 8).listen();
  gui.add(state, "radius", 1, 100).listen();
  gui.add(state, "yRadius", 1, 100).listen();
  gui.add(state, "arc", -360, 360).listen();
  gui.add(state, "startAngle", 1, 360).listen();
  gui.addColor(state, "color");
};
