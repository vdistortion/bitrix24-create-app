#!/usr/bin/env node
import { exec } from 'child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { cp, existsSync, readdirSync, statSync } from 'node:fs';
import { green, red } from 'kolorist';
import prompts from 'prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const response = await prompts({
    type: 'select',
    name: 'action',
    message: 'What project template would you like to generate?',
    choices: [
      {
        title: 'Template',
        value: 'unpack',
      },
      { title: 'Repository', value: 'clone' },
    ],
  });

  if (response.action === 'unpack') {
    const folderPath = join(__dirname, 'templates');

    if (existsSync(folderPath)) {
      const folders = readdirSync(folderPath).filter((file) => {
        return statSync(join(folderPath, file)).isDirectory();
      });

      if (folders.length === 0) {
        console.info('Нет доступных папок для распаковки.');
        return;
      }

      const responseFolder = await prompts({
        type: 'select',
        name: 'selectedFolder',
        message: 'Выберите папку для распаковки:',
        choices: folders.map((folder) => {
          const title = folder.includes('ng') ? red(folder) : green(folder);
          return { title, value: folder };
        }),
      });

      const destinationPath = join(
        __dirname,
        'destination',
        responseFolder.selectedFolder,
      );

      cp(
        join(folderPath, responseFolder.selectedFolder),
        destinationPath,
        { recursive: true },
        (err: Error) => {
          if (err) {
            console.error('Ошибка при распаковке:', err);
          } else {
            console.info('Папка успешно распакована в', destinationPath);
          }
        },
      );
    } else {
      console.error('Шаблоны не найдены.');
    }
  } else if (response.action === 'clone') {
    const responseClone = await prompts({
      type: 'select',
      name: 'repo',
      message: 'Введите URL репозитория для клонирования:',
      choices: [
        {
          title: red('bitrix24-stickerpack-app'),
          value: 'bitrix24-stickerpack-app',
        },
        {
          title: green('bitrix24-pricing-app'),
          value: 'bitrix24-pricing-app',
        },
      ],
    });

    exec(
      `git clone git@github.com:astrotrain55/${responseClone.repo}.git`,
      (err, stdout, stderr) => {
        if (err) {
          console.error('Ошибка при клонировании: ', stderr);
          return;
        }
        console.info(
          `Репозиторий ${responseClone.repo} успешно клонирован.`,
          stdout,
        );
      },
    );
  }
}

main().catch(console.error);
