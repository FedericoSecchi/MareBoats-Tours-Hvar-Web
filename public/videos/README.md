# Background videos

Web-optimised videos used as hero backgrounds. Every video in this folder must ship with a matching poster image, because the poster is what browsers show while the video loads and what Google measures as LCP.

## Filenames expected by the code

Referenced from `app/hvar-boat-tour-photos/page.tsx`:

- `hvar-boat-tour-memories-loop.mp4` — the loop
- `hvar-boat-tour-memories-poster.jpg` — first frame, mandatory

If either file is missing the browser falls back to the poster or to a blank frame with the overlay. The page still renders.

## Video specs

- Container: `.mp4`, codec H.264 (baseline profile), `+faststart` (moov atom at the start)
- Resolution: 1920×1080 max, 1280×720 fine for a hero loop
- Frame rate: 24 or 30 fps
- Bitrate: 2 to 4 Mbps (target size 3 to 8 MB for a 10 to 20 second loop)
- Duration: keep under 20 seconds, cut on a frame that matches the first frame so the loop is seamless
- Audio: strip it. `<video>` on the site is `muted` anyway and audio adds weight for nothing

Reference ffmpeg command:

```
ffmpeg -i input.mov \
  -vf "scale='min(1920,iw)':-2" \
  -c:v libx264 -profile:v baseline -level 3.1 -pix_fmt yuv420p \
  -preset slow -crf 24 -maxrate 3M -bufsize 6M \
  -movflags +faststart \
  -an \
  hvar-boat-tour-memories-loop.mp4
```

## Poster specs

- `.jpg`, sRGB, quality 80
- Same aspect ratio as the video (1920×1080 or 1280×720)
- Target size under 250 KB
- Content: a still that looks intentional if the video never plays. Not a black frame

Reference ffmpeg command to grab the first frame:

```
ffmpeg -i hvar-boat-tour-memories-loop.mp4 -frames:v 1 -q:v 3 hvar-boat-tour-memories-poster.jpg
```

## Do not commit uncompressed masters

Anything over ~10 MB does not belong in this folder. If a raw export lives here temporarily during authoring, compress it before `git add`.
