import { type VantaWavesConfig } from "components/system/Desktop/Wallpapers/vantaWaves/types";

export const config: VantaWavesConfig = {
  camera: {
    far: 400,
    fov: 30,
    near: 0.1,
  },
  color: "hsl(190, 80%, 15%)",
  colorCycleSpeed: 10,
  forceAnimate: true,
  hh: 50,
  hue: 190,
  lightness: 10,
  material: {
    options: {
      fog: false,
      wireframe: false,
    },
  },
  saturation: 80,
  shininess: 45,
  waveHeight: 20,
  waveSpeed: 0.8,
  ww: 50,
};

export const disableControls = {
  gyroControls: false,
  mouseControls: false,
  mouseEase: false,
  touchControls: false,
};
