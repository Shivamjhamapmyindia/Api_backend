import fs from 'fs/promises';
import path from 'path';

const currentModuleDir = new URL('../', import.meta.url).pathname;

const readDirectory = async (directoryPath) => {
  try {
    const fullPath = path.join(currentModuleDir, directoryPath);
    const files = await fs.readdir(fullPath, 'utf-8');
    const fullPaths = files.map((file) => path.join(fullPath, file));
    return fullPaths;
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
    return [];
  }
};

// Images full path
const imgsPath = await readDirectory('./public/imgs');

// Videos full path
const videosPath = await readDirectory('./public/videos');

// Model full path
const modelPath = await readDirectory('./public/modelType');

// console.log(imgsPath, videosPath, modelPath);

export { imgsPath, videosPath, modelPath };
