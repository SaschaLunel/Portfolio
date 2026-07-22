// Resizes and compresses every image in `images-original/` and writes the
// result into `public/images/`, ready to reference in src/media.js.
//
// Usage:
//   1. Put your full-size photos in a folder called `images-original`
//      at the root of the project (create it if it doesn't exist).
//   2. Run: npm run optimize-images
//   3. Optimized files appear in `public/images/`, same filenames,
//      converted to .jpg.
//
// What it does to each image:
//   - Resizes so the longest side is at most MAX_DIMENSION px (portfolio
//     cards and modal photos never display larger than that, so anything
//     beyond it is wasted weight). Images already smaller are left at
//     their original size (never scaled up).
//   - Re-compresses as JPEG at QUALITY, which is typically enough to
//     bring a 15-20MB camera photo down to a few hundred KB with no
//     visible quality loss on screen.

import { readdir, mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = path.resolve('images-original')
const OUTPUT_DIR = path.resolve('public/images')
const MAX_DIMENSION = 1600
const QUALITY = 82

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff'])

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`No "images-original" folder found at ${SOURCE_DIR}`)
    console.error('Create it and put your full-size photos inside, then run this again.')
    process.exit(1)
  }

  await mkdir(OUTPUT_DIR, { recursive: true })

  const files = (await readdir(SOURCE_DIR)).filter((f) =>
    SUPPORTED.has(path.extname(f).toLowerCase()),
  )

  if (files.length === 0) {
    console.log('No images found in images-original/. Nothing to do.')
    return
  }

  console.log(`Optimizing ${files.length} image(s)...\n`)

  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const inputPath = path.join(SOURCE_DIR, file)
    const outputName = `${path.parse(file).name}.jpg`
    const outputPath = path.join(OUTPUT_DIR, outputName)

    const inputStats = await sharp(inputPath).metadata()
    const beforeSize = (await stat(inputPath)).size

    await sharp(inputPath)
      .resize({
        width: MAX_DIMENSION,
        height: MAX_DIMENSION,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outputPath)

    const afterSize = (await stat(outputPath)).size

    totalBefore += beforeSize
    totalAfter += afterSize

    console.log(
      `${file} -> ${outputName}  ${(beforeSize / 1024 / 1024).toFixed(1)}MB -> ${(afterSize / 1024).toFixed(0)}KB  (${inputStats.width}x${inputStats.height})`,
    )
  }

  console.log(
    `\nDone. Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`,
  )
}

main()
