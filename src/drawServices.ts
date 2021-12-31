import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';
const config = require('config');
const assetsWidth = config.get('assets.width');
const assetsHeight = config.get('assets.height');

const imageWidth = config.get('generation.image.size.width');
const imageHeight = config.get('generation.image.size.height');
const canvas = createCanvas(imageWidth, imageHeight);
const ctx = canvas.getContext('2d');

export const drawNft = async (paths: string[], fileName: string) => {
  for (const iterator of paths)
    ctx.drawImage(
      await loadImage(path.join(__dirname, '../assets/', iterator)),
      0,
      0,
      assetsWidth,
      assetsHeight,
      0,
      0,
      imageWidth,
      imageHeight,
    );

  fs.writeFileSync(
    path.join(__dirname, '../generation/output/images/', `${fileName}.png`),
    canvas.toBuffer('image/png'),
  );
};
