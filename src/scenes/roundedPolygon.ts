import "@pixi/graphics-extras";
import { deg2rad } from "../utils/geometry.ts";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/roundedPolygon.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useRoundedPolygon = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color)
      .beginFill(state.fill);

    graphics.drawRoundedPolygon?.(
      window.innerWidth / 2, //
      window.innerHeight / 2,
      state.radius,
      state.sides,
      state.corner,
      deg2rad(state.rotation),
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 5);
    tweenProperty(state, "radius", 1, 100);
    tweenProperty(state, "sides", 3, 25);
    tweenProperty(state, "rotation", 0, 360);
  });

  gui.add(state, "stroke", 1, 10).listen();
  gui.add(state, "radius", 1, 100).listen();
  gui.add(state, "sides", 3, 25, 1).listen();
  gui.add(state, "corner", 3, 50).listen();
  gui.add(state, "rotation", 0, 360).listen();
  gui.addColor(state, "color");
  gui.addColor(state, "fill");
};
