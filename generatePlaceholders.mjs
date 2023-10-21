import fs from "fs";
import sharp from "sharp";
import util from "util";

const writeFileAsync = util.promisify(fs.writeFile);

async function createPlaceholder(imageName) {
  const path = `./public/images/${imageName}`

  const nameOnly = imageName.split('.')[0]
  
  const baseImg = await sharp(path)
    .resize(128, null)
    .webp()
  .blur(5)
    .toBuffer();
  
  await writeFileAsync(`./public/images/placeholders/${nameOnly}.txt`, `data:image/png;base64,${baseImg.toString('base64')}`, 'utf-8');
}

const regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF|webp|WEBP)$/);
    
fs.readdir('./public/images', (err, files) => {
  files.forEach(file => {
    if (regex.test(file))
  createPlaceholder(file.toString())
  });
});