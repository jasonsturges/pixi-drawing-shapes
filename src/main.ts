import { Application, Graphics } from "pixi.js";
import { Viewport } from "pixi-viewport";
import { useGui } from "./ui/gui.ts";
import "./style.css";
import "./ui/gui.ts";

const canvas = document.querySelector<HTMLCanvasElement>("canvas");

export const app = new Application({
  view: canvas as HTMLCanvasElement,
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  autoDensity: true,
  backgroundColor: 0x131313,
  resolution: devicePixelRatio || 1,
  resizeTo: window,
});

export const viewport = new Viewport({
  worldWidth: 1000,
  worldHeight: 1000,
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  events: app.renderer.events,
})
  .drag()
  .pinch()
  .wheel()
  .decelerate();
app.stage.addChild(viewport);

export const graphics = viewport.addChild(new Graphics());
export let drawFunction: () => void;
export let animateFunction: () => void;

app.ticker.add(() => {
  drawFunction();
});

export const setDrawFunction = (fn: () => void) => {
  drawFunction = fn;
};

export const setAnimationFunction = (fn: () => void) => {
  animateFunction = fn;
};

useGui();
