#!/bin/bash

EXCLUDED_DIRS=("node_modules" "dist" ".git" ".idea")
EXCLUDED_FILES=("package-lock.json" "stats.html")

EXCLUDE_ARGS=()
for dir in "${EXCLUDED_DIRS[@]}"; do
  EXCLUDE_ARGS+=(--exclude-dir="$dir")
done
for file in "${EXCLUDED_FILES[@]}"; do
  EXCLUDE_ARGS+=(--exclude="$file")
done

MODE="$1"
SEARCH_TERM="$2"

case "$MODE" in
  list)
    grep "${EXCLUDE_ARGS[@]}" --color -Hrwl "$SEARCH_TERM"
    ;;
  word)
    grep "${EXCLUDE_ARGS[@]}" --color -Hrwn "$SEARCH_TERM"
    ;;
  full)
    grep "${EXCLUDE_ARGS[@]}" --color -Hrn "$SEARCH_TERM"
    ;;
  *)
    # Если MODE не задан — просто ищем (предполагаем, что $1 — это запрос)
    grep "${EXCLUDE_ARGS[@]}" --color -Hrn "$MODE"
    ;;
esac

exit 0
