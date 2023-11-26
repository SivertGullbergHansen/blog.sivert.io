import { readdirSync, statSync, writeFileSync } from "fs";
import { join, parse } from "path";

export const generateFileObject = (folderPath, outputPath) => {
  const fileObject = {};

  try {
    console.log("Generating emojis");

    const files = readdirSync(folderPath);

    files.forEach((file) => {
      const filePath = join(folderPath, file);
      const stats = statSync(filePath);

      if (stats.isFile()) {
        // Use the filename as both the key and the value
        const fileNameWithoutExt = parse(file).name;
        fileObject[fileNameWithoutExt] = file;
        console.log("Found", fileNameWithoutExt);
      }
    });

    // Write the fileObject to a JSON file
    const jsonContent = JSON.stringify(fileObject, null, 2);
    writeFileSync(outputPath, jsonContent, "utf-8");

    console.log(`FileObject successfully written to ${outputPath}`);
  } catch (error) {
    console.error("Error generating fileObject:", error);
  }
};

// Generate icons for emojis
const folderPath = "./public/images/icons";
const outputPath = "./iconList.json";
generateFileObject(folderPath, outputPath);
