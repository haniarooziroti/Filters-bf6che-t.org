import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import youtubedl from 'youtube-dl-exec';
import sharp from 'sharp';

const root = process.cwd();
const tmpDir = path.join(root, '.tmp', 'youtube');
const rawDir = path.join(tmpDir, 'raw-frames');
const VIDEOS = [
  { id: 'oI8HKTelMn8', url: 'https://www.youtube.com/watch?v=oI8HKTelMn8', stamps: [4, 8, 12, 16, 20, 24, 28] },
  { id: 'XHSY7S7jayw', url: 'https://www.youtube.com/watch?v=XHSY7S7jayw', stamps: [6, 14, 22, 30, 38, 46, 54] },
];

const OUT_NAMES = [
  'bf6-esp-wallhack',
  'bf6-aimbot',
  'bf6-skeleton-esp',
  'bf6-vehicle-esp',
  'bf6-radar',
  'bf6-conquest-esp',
  'battlefield-6-cheat-provider',
  'battlefield-6-config-presets',
  'battlefield-6-hwid-reset',
  'battlefield-6-troubleshooting',
  'battlefield-6-bot-lobbies',
  'battlefield-6-free-vs-paid',
];

function ffmpegBin() {
  const fromPath = spawnSync('where', ['ffmpeg'], { encoding: 'utf8', shell: true });
  const line = fromPath.stdout?.trim().split(/\r?\n/)[0];
  if (line) return line;
  throw new Error('ffmpeg not found on PATH');
}

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', shell: false, ...opts });
  if (r.status !== 0) {
    throw new Error(`${cmd} ${args.join(' ')} failed: ${r.stderr || r.stdout}`);
  }
  return r;
}

async function downloadVideo(video) {
  const out = path.join(tmpDir, `${video.id}.mp4`);
  if (fs.existsSync(out)) return out;

  fs.mkdirSync(tmpDir, { recursive: true });
  console.log(`Downloading ${video.id}…`);
  await youtubedl(video.url, {
    output: out,
    format: 'bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]/best[height<=720][ext=mp4]/best',
    mergeOutputFormat: 'mp4',
    noPlaylist: true,
    ffmpegLocation: path.dirname(ffmpegBin()),
  });
  return out;
}

function grabFrame(videoPath, seconds, outJpg) {
  const ff = ffmpegBin();
  fs.mkdirSync(path.dirname(outJpg), { recursive: true });
  run(ff, [
    '-hide_banner',
    '-loglevel',
    'error',
    '-ss',
    String(seconds),
    '-i',
    videoPath,
    '-frames:v',
    '1',
    '-q:v',
    '2',
    '-y',
    outJpg,
  ]);
}

async function polishFrame(input, outputPng) {
  const meta = await sharp(input).metadata();
  const targetWidth = Math.max(meta.width ?? 1280, 1600);
  await sharp(input)
    .resize({
      width: targetWidth,
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.6 })
    .png({ compressionLevel: 9, palette: false })
    .toFile(outputPng);
}

async function main() {
  const gameplayDir = path.join(root, 'public', 'images', 'gameplay');
  fs.mkdirSync(rawDir, { recursive: true });
  fs.mkdirSync(gameplayDir, { recursive: true });

  const candidates = [];
  for (const video of VIDEOS) {
    const file = await downloadVideo(video);
    for (const sec of video.stamps) {
      const raw = path.join(rawDir, `${video.id}-${sec}s.jpg`);
      grabFrame(file, sec, raw);
      candidates.push(raw);
    }
  }

  const picked = candidates.slice(0, OUT_NAMES.length);
  if (picked.length < OUT_NAMES.length) {
    throw new Error(`Need ${OUT_NAMES.length} frames, got ${picked.length}`);
  }

  for (let i = 0; i < OUT_NAMES.length; i += 1) {
    const name = OUT_NAMES[i];
    const out = path.join(gameplayDir, `${name}.png`);
    await polishFrame(picked[i], out);
    console.log(`Wrote ${path.relative(root, out)}`);
  }

  console.log('Frame extraction complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
