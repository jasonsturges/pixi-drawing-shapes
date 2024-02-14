import { gsap, Sine } from "gsap";

export const tweenProperty = (
  target: Object,
  prop: string,
  min: number,
  max: number,
) => {
  gsap.to(target, {
    [prop]: random(min, max),
    duration: random(0.5, 2),
    ease: Sine.easeInOut,
    onComplete: tweenProperty,
    onCompleteParams: [target, prop, min, max],
  });
};

const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
