import { mkdir, copyFile } from 'fs/promises';
import { join } from 'path';

const assetsDir = join('dist', 'assets');
const staticFiles = [
  'World.svg',
  'South_America.svg',
  'earth-score.gif',
  'Oceania.svg',
  'North_America.svg',
  'Europe.svg',
  'Asia.svg',
  'Africa.svg',
  'globo-quiz-globe.gif'
];

async function moveAssets() {
  try {
    // Ensure assets directory exists
    await mkdir(assetsDir, { recursive: true });

    // Move each static file to assets directory
    for (const file of staticFiles) {
      const sourcePath = join('public', file);
      const targetPath = join(assetsDir, file);
      await copyFile(sourcePath, targetPath);
      console.log(`Moved ${file} to assets directory`);
    }
  } catch (error) {
    console.error('Error moving assets:', error);
    process.exit(1);
  }
}

moveAssets(); 