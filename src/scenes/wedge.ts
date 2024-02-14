import { drawWedge } from "../drawing/wedge.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/wedge.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useWedge = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color)
      .beginFill(state.fill);

    drawWedge(
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
    tweenProperty(state, "stroke", 1, 8);
    tweenProperty(state, "radius", 0, 150);
    tweenProperty(state, "arc", 0, 360);
    tweenProperty(state, "startAngle", 0, 360);
    tweenProperty(state, "yRadius", 0, 150);
  });

  gui.add(state, "stroke", 1, 8).listen();
  gui.add(state, "radius", 1, 150).listen();
  gui.add(state, "yRadius", 0, 150).listen();
  gui.add(state, "arc", 1, 360).listen();
  gui.add(state, "startAngle", 1, 360).listen();
  gui.addColor(state, "color");
  gui.addColor(state, "fill");
};
