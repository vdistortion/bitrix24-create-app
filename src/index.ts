#!/usr/bin/env node
import { exec } from 'child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { cp, existsSync, readdirSync, statSync } from 'node:fs';
import { green, red } from 'kolorist';
import prompts from 'prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GITIGNORE_FILE: string = 'template.gitignore';
const SKIP_FILES: string[] = ['node_modules', 'dist', GITIGNORE_FILE];
const NG_POST_MESSAGE: string = 'Explore the Docs https://angular.dev/';
const VUE_POST_MESSAGE: string =
  'Vue’s official documentation provides you with all information you need to get started https://vuejs.org/';
const NG_REPO_EXAMPLE: string = 'bitrix24-stickerpack-app';
const VUE_REPO_EXAMPLE: string = 'bitrix24-pricing-app';
const REPO_NAME: string = 'bitrix24-create-app';
const USER: string = 'vdistortion';

async function main() {
  const response = await prompts({
    type: 'select',
    name: 'action',
    message: 'What project template would you like to generate?',
    choices: [
      { title: 'Template', value: 'unpack' },
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
        console.info('There are no folders available for unpacking.');
        return;
      }

      const { selectedFolder } = await prompts({
        type: 'select',
        name: 'selectedFolder',
        message: 'Select a folder for unpacking:',
        choices: folders.map((folder) => {
          const title = folder.includes('ng') ? red(folder) : green(folder);
          return { title, value: folder };
        }),
      });
      const { projectName } = await prompts({
        type: 'text',
        name: 'projectName',
        message: 'Enter the name of the project:',
        initial: selectedFolder,
      });

      cp(
        join(folderPath, selectedFolder),
        projectName,
        {
          recursive: true,
          filter(source): boolean | Promise<boolean> {
            const isSkip = SKIP_FILES.some((name) =>
              source.startsWith(join(folderPath, selectedFolder, name)),
            );
            return !isSkip;
          },
        },
        (err: Error) => {
          if (err) {
            console.error('Unpacking error:', err);
            return;
          }

          cp(
            join(folderPath, selectedFolder, GITIGNORE_FILE),
            join(projectName, '.gitignore'),
            {},
            (err: Error) => {
              if (err) console.error('Error copying `.gitignore` file:', err);
            },
          );

          console.info(
            'The folder has been successfully extracted to',
            projectName.includes('ng') ? red(projectName) : green(projectName),
          );
          console.info(
            selectedFolder.includes('ng') ? NG_POST_MESSAGE : VUE_POST_MESSAGE,
          );
          console.info(
            `🎉 Thank you for using ${REPO_NAME}! \nIf you like it, a GitHub star would be greatly appreciated: https://github.com/${USER}/${REPO_NAME} 🌟`,
          );
        },
      );
    } else {
      console.error('No templates found.');
    }
  } else if (response.action === 'clone') {
    const { repo } = await prompts({
      type: 'select',
      name: 'repo',
      message: 'Enter the URL of the repository to clone:',
      choices: [
        {
          title: red(`${NG_REPO_EXAMPLE} (Angular example)`),
          value: NG_REPO_EXAMPLE,
        },
        {
          title: green(`${VUE_REPO_EXAMPLE} (Vue example)`),
          value: VUE_REPO_EXAMPLE,
        },
      ],
    });

    exec(
      `git clone git@github.com:${USER}/${repo}.git`,
      (err, stdout, stderr) => {
        if (err) {
          console.error('Cloning error:', stderr);
          return;
        }
        console.info(
          `The ${`https://github.com/${USER}/${repo}`} repository has been successfully cloned.`,
          stdout,
        );
      },
    );
  }
}

main().catch(console.error);
