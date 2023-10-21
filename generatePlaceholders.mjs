import fs from "fs";
import sharp from "sharp";

async function createPlaceholder(imageName) {
  const path = `./public/images/${imageName}`

  const nameOnly = imageName.split('.')[0]
  
  sharp(path)
    .resize(128, null)
    .webp()
  .blur(5)
        .toFile(`./public/images/placeholders/${nameOnly}.webp`, function(err){
          if (err) {
          console.log('Fail: ' + imageName);
              console.log(err);
          }
          console.log('success: ' + imageName);
        });
}

const regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF|webp|WEBP)$/);
    
fs.readdir('./public/images', (err, files) => {
  files.forEach(file => {
    if (regex.test(file))
  createPlaceholder(file.toString())
  });
});