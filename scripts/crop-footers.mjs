import sharp from 'sharp';
const T = process.env.TEMP;
await sharp(`${T}\\bcit-shots\\footer-live.png`).extract({ left: 0, top: 1250, width: 1366, height: 950 }).toFile(`${T}\\bcit-shots\\crop-live.png`);
await sharp(`${T}\\bcit-shots\\footer3.png`).extract({ left: 0, top: 1250, width: 1366, height: 1300 }).toFile(`${T}\\bcit-shots\\crop-local.png`);
console.log('done');
