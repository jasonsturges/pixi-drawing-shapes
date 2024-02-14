import "@pixi/graphics-extras";
import { graphics, setAnimationFunction, setDrawFunction } from "../main.ts";
import { gui } from "../ui/gui.ts";
import { state } from "../state/chamferRect.ts";
import { tweenProperty } from "../utils/tween.ts";

export const useChamferRect = () => {
  setDrawFunction(() => {
    graphics
      .clear() //
      .lineStyle(state.stroke, state.color)
      .beginFill(state.fill);

    graphics.drawChamferRect?.(
      window.innerWidth / 2,
      window.innerHeight / 2,
      state.width,
      state.height,
      state.chamfer,
    );
  });

  setAnimationFunction(() => {
    tweenProperty(state, "stroke", 1, 5);
    tweenProperty(state, "width", 1, 100);
    tweenProperty(state, "height", 1, 100);
    tweenProperty(state, "chamfer", 0, 50);
  });

  gui.add(state, "stroke", 1, 10).listen();
  gui.add(state, "width", 1, 100).listen();
  gui.add(state, "height", 1, 100).listen();
  gui.add(state, "chamfer", 0, 50).listen();
  gui.addColor(state, "color");
  gui.addColor(state, "fill");
};
