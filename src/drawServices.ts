import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';

const canvas = createCanvas(2880, 2880);
const ctx = canvas.getContext('2d');

// // Write "Awesome!"
// ctx.font = '30px Impact';
// ctx.rotate(0.1);
// ctx.fillText('Awesome!', 50, 100);

// // Draw line under text
// var text = ctx.measureText('Awesome!');
// ctx.strokeStyle = 'rgba(0,0,0,0.5)';
// ctx.beginPath();
// ctx.lineTo(50, 102);
// ctx.lineTo(50 + text.width, 102);
// ctx.stroke();

export const drawNft = async (paths: string[], fileName: string) => {
  for (const iterator of paths) {
    console.log(iterator)
    const image = await loadImage(path.join(__dirname, '../assets/', iterator));
    ctx.drawImage(image, 0, 0);
  }
  fs.writeFileSync(
    path.join(__dirname, '../output/', `${fileName}.png`),
    canvas.toBuffer('image/png'),
  );
};
