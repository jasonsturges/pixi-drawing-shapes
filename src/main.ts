import "./style.css";
import { Application, SCALE_MODES, Sprite } from "pixi.js";
import { Viewport } from "pixi-viewport";

const canvas = document.querySelector<HTMLCanvasElement>("canvas");

const app = new Application({
  view: canvas as HTMLCanvasElement,
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  autoDensity: true,
  backgroundColor: 0x131313,
  resolution: devicePixelRatio || 1,
  resizeTo: window,
});

const viewport = new Viewport({
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

const bunny = Sprite.from("https://pixijs.com/assets/bunny.png");
bunny.texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
bunny.anchor.set(0.5);
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;
viewport.addChild(bunny);

app.ticker.add((delta: number) => {
  bunny.rotation += 0.1 * delta;
});
