#!/bin/bash

# Ищем в текущем каталоге
cd ${PWD}

# Список каталогов, в которых искать не нужно
for var in node_modules dist .git .idea .angular .vscode; do
  exclude=$exclude"--exclude-dir="$var" "
done

# Список файлов, в которых искать не нужно
for var in package-lock.json LICENSE; do
  exclude=$exclude"--exclude="$var" "
done

# Параметры вывода
if   [[ "list" == *"$1"* ]]; then # Список файлов
  grep $exclude --color -Hrwl $2
elif [[ "word" == *"$1"* ]]; then # Только полные слова
  grep $exclude --color -Hrwn $2
elif [[ "full" == *"$1"* ]]; then # Подробно
  grep $exclude --color -Hrn $2
fi

exit 0
