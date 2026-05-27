#!/usr/bin/env bash
# optimize-images.sh — Batch image optimizer using ffmpeg
#
# Usage:
#   ./scripts/optimize-images.sh
#   ./scripts/optimize-images.sh public/images
#   ./scripts/optimize-images.sh public/images public/images/optimized
#
# Output:
#   - WebP lossy quality 85
#   - Max width: 1920px (downscales only, never upscales)
#   - Keeps original images untouched
#   - Saves optimized files into OUTPUT_DIR

set -euo pipefail

INPUT_DIR="${1:-public/images}"
OUTPUT_DIR="${2:-public/images/optimized}"

MAX_WIDTH="${MAX_WIDTH:-1920}"
WEBP_QUALITY="${WEBP_QUALITY:-85}"

TEAM_WIDTH="${TEAM_WIDTH:-800}"
TEAM_HEIGHT="${TEAM_HEIGHT:-600}"

# ─────────────────────────────────────────────────────────────
# Checks
# ─────────────────────────────────────────────────────────────

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg is not installed or not available in PATH."
  exit 1
fi

if [[ ! -d "$INPUT_DIR" ]]; then
  echo "Error: input directory does not exist: $INPUT_DIR"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

# ─────────────────────────────────────────────────────────────
# Collect images
# ─────────────────────────────────────────────────────────────

mapfile -t IMAGES < <(
  find "$INPUT_DIR" -maxdepth 1 -type f \
    \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) \
    | sort
)

if [[ ${#IMAGES[@]} -eq 0 ]]; then
  echo "No images found in: $INPUT_DIR"
  exit 0
fi

echo "Found ${#IMAGES[@]} image(s)"
echo "Input:  $INPUT_DIR"
echo "Output: $OUTPUT_DIR"
# echo "Settings: max-width=${MAX_WIDTH}px, quality=${WEBP_QUALITY}"
echo "Settings: team-size=${TEAM_WIDTH}x${TEAM_HEIGHT}px, quality=${WEBP_QUALITY}"
echo ""

# ─────────────────────────────────────────────────────────────
# Process images
# ─────────────────────────────────────────────────────────────

for img in "${IMAGES[@]}"; do
  filename="$(basename "$img")"
  name="${filename%.*}"
  output="$OUTPUT_DIR/${name}.webp"

  # scale: downscale if wider than MAX_WIDTH, keep aspect ratio, never upscale
  # ffmpeg -y -loglevel error \
  #   -i "$img" \
  #   -vf "scale='min(iw,${MAX_WIDTH}):-2'" \
  #   -c:v libwebp \
  #   -quality "${WEBP_QUALITY}" \
  #   -compression_level 6 \
  #   "$output"

  ffmpeg -y \ -y -hide_banner -loglevel error -nostats \
  -i "$img" \
  -vf "scale=${TEAM_WIDTH}:${TEAM_HEIGHT}:force_original_aspect_ratio=increase,crop=${TEAM_WIDTH}:${TEAM_HEIGHT}" \
  -c:v libwebp \
  -quality "${WEBP_QUALITY}" \
  -compression_level 6 \
  -preset photo \
  "$output"
done

# ─────────────────────────────────────────────────────────────
# Size report
# ─────────────────────────────────────────────────────────────

echo ""
echo "── Results ─────────────────────────────────────────────────────"
printf "%-42s %10s %10s %8s\n" "File" "Before" "After" "Saved"
printf "%-42s %10s %10s %8s\n" "----" "------" "-----" "-----"

TOTAL_BEFORE=0
TOTAL_AFTER=0

for img in "${IMAGES[@]}"; do
  filename="$(basename "$img")"
  name="${filename%.*}"
  output="$OUTPUT_DIR/${name}.webp"

  if [[ ! -f "$output" ]]; then
    printf "%-42s %10s %10s %8s\n" "$filename" "FAILED" "-" "-"
    continue
  fi

  before="$(stat -c%s "$img")"
  after="$(stat -c%s "$output")"

  if [[ "$before" -gt 0 ]]; then
    saved=$(( (before - after) * 100 / before ))
  else
    saved=0
  fi

  TOTAL_BEFORE=$((TOTAL_BEFORE + before))
  TOTAL_AFTER=$((TOTAL_AFTER + after))

  before_h="$(numfmt --to=iec-i --suffix=B "$before" 2>/dev/null || echo "${before}B")"
  after_h="$(numfmt --to=iec-i --suffix=B "$after" 2>/dev/null || echo "${after}B")"

  printf "%-42s %10s %10s %7s%%\n" "$filename" "$before_h" "$after_h" "$saved"
done

if [[ "$TOTAL_BEFORE" -gt 0 ]]; then
  total_saved=$(( (TOTAL_BEFORE - TOTAL_AFTER) * 100 / TOTAL_BEFORE ))
  total_before_h="$(numfmt --to=iec-i --suffix=B "$TOTAL_BEFORE" 2>/dev/null || echo "${TOTAL_BEFORE}B")"
  total_after_h="$(numfmt --to=iec-i --suffix=B "$TOTAL_AFTER" 2>/dev/null || echo "${TOTAL_AFTER}B")"

  echo ""
  printf "%-42s %10s %10s %7s%%\n" "TOTAL" "$total_before_h" "$total_after_h" "$total_saved"
fi

echo ""
echo "Done. Optimized images are in: $OUTPUT_DIR"
