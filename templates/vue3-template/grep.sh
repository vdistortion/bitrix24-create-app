#!/bin/bash

# Раскраска вывода
export GREP_OPTIONS='--color=always'

# Ищем в каталоге
cd ${PWD}

# Список каталогов, в которых искать не нужно
for var in node_modules dist; do
  exclude=$exclude"--exclude-dir="$var" "
done

# Список файлов, в которых искать не нужно
for var in package-lock.json graph.svg report.html d.diff; do
  exclude=$exclude"--exclude="$var" "
done

# Параметры вывода
if   [[ "list" == *"$1"* ]]; then # Список файлов
  grep $exclude -Hrwl --color $2
elif [[ "once" == *"$1"* ]]; then # Только полные слова
  grep $exclude -Hrwn --color $2
elif [[ "full" == *"$1"* ]]; then # Подробно
  grep $exclude -Hrn --color $2
fi

exit 0
