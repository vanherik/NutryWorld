#!/usr/bin/env bash
# Re-encode a raw video to an ALL-KEYFRAME H.264 for smooth scroll-scrubbing.
# Without this (GOP=1), seeking between keyframes makes the scrub stutter.
# Requires ffmpeg on PATH. See the `scroll-video-handoff` skill for details.
set -euo pipefail

INPUT="${1:-../assets/video/NutryWorldIntro.mp4}"
OUTPUT="${2:-public/bg.mp4}"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found on PATH. Install it, then re-run this script." >&2
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT")"

ffmpeg -y -i "$INPUT" -an -c:v libx264 -preset slow -crf 20 \
  -g 1 -keyint_min 1 -sc_threshold 0 -pix_fmt yuv420p \
  -vf "scale='min(1600,iw)':-2" \
  -movflags +faststart "$OUTPUT"

echo "Encoded all-keyframe background video to $OUTPUT"
