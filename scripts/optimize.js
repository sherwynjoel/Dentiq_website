import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const dataFile = path.join(rootDir, 'src', 'data', 'treatmentsData.js');

async function optimize() {
  try {
    const files = fs.readdirSync(publicDir);
    const imageFiles = files.filter(f =>
      ['.png', '.jpg', '.jpeg'].includes(path.extname(f).toLowerCase()) &&
      !f.includes('logo') // Keep logo as is or handle separately
    );

    console.log(`Found ${imageFiles.length} images to optimize.`);

    for (const file of imageFiles) {
      const inputPath = path.join(publicDir, file);
      const ext = path.extname(file);
      const outputName = file.replace(ext, '.webp');
      const outputPath = path.join(publicDir, outputName);

      console.log(`Processing: ${file}...`);

      await sharp(inputPath)
        .resize(1600, null, { withoutEnlargement: true }) // Ensure they aren't unnecessarily large
        .webp({ quality: 75, effort: 6 })
        .toFile(outputPath);

      const oldSize = fs.statSync(inputPath).size / (1024 * 1024);
      const newSize = fs.statSync(outputPath).size / (1024 * 1024);

      console.log(`  Reduced from ${oldSize.toFixed(2)}MB to ${newSize.toFixed(2)}MB`);

      // Delete old file if new one is successfully created and smaller
      if (fs.existsSync(outputPath) && newSize < oldSize) {
        fs.unlinkSync(inputPath);
        console.log(`  Original deleted. Reference updated to .webp`);
      }
    }

    // Update treatmentsData.js
    let dataContent = fs.readFileSync(dataFile, 'utf8');
    imageFiles.forEach(file => {
      const ext = path.extname(file);
      const webpName = file.replace(ext, '.webp');
      dataContent = dataContent.split(file).join(webpName);
    });

    fs.writeFileSync(dataFile, dataContent);
    console.log('\nSuccess! treatmentsData.js references updated.');
    console.log('Your project size should be significantly reduced.');

  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

optimize();
