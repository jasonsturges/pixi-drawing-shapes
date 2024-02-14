import { GUI } from "lil-gui";
import { gsap } from "gsap";
import { animateFunction } from "../main.ts";
import { useArc } from "../scenes/arc.ts";
import { useBurst } from "../scenes/burst.ts";
import { useChamferRect } from "../scenes/chamferRect.ts";
import { useDash } from "../scenes/dash.ts";
import { useFilletRect } from "../scenes/filletRect.ts";
import { useGear } from "../scenes/gear.ts";
import { usePolygon } from "../scenes/polygon.ts";
import { useRegularPolygon } from "../scenes/regularPolygon.ts";
import { useRoundedPolygon } from "../scenes/roundedPolygon.ts";
import { useRoundedRect } from "../scenes/roundedRect.ts";
import { useStar } from "../scenes/star.ts";
import { useStarExtra } from "../scenes/starExtra.ts";
import { useTorus } from "../scenes/torus.ts";
import { useWedge } from "../scenes/wedge.ts";

export let gui = new GUI();

const ui = {
  shape: "Burst",
  animate: true,
};

export const useGui = () => {
  if (gui) gui.destroy();
  gui = new GUI();
  gsap.globalTimeline.clear();

  gui
    .add(ui, "shape", [
      "Arc",
      "Burst",
      "Chamfer Rect",
      "Dash",
      "Fillet Rect",
      "Gear",
      "Polygon",
      "Regular Polygon",
      "Rounded Polygon",
      "Rounded Rect",
      "Star",
      "Star (Extras)",
      "Torus",
      "Wedge",
    ])
    .onChange(useGui);

  switch (ui.shape) {
    case "Arc":
      useArc();
      break;
    case "Burst":
      useBurst();
      break;
    case "Chamfer Rect":
      useChamferRect();
      break;
    case "Dash":
      useDash();
      break;
    case "Fillet Rect":
      useFilletRect();
      break;
    case "Gear":
      useGear();
      break;
    case "Polygon":
      usePolygon();
      break;
    case "Regular Polygon":
      useRegularPolygon();
      break;
    case "Rounded Polygon":
      useRoundedPolygon();
      break;
    case "Rounded Rect":
      useRoundedRect();
      break;
    case "Star":
      useStar();
      break;
    case "Star (Extras)":
      useStarExtra();
      break;
    case "Torus":
      useTorus();
      break;
    case "Wedge":
      useWedge();
      break;
  }

  runAnimation(ui.animate);
  gui.add(ui, "animate").onChange(runAnimation);
};

const runAnimation = (value: boolean) => {
  value ? animateFunction() : gsap.globalTimeline.clear();
};
