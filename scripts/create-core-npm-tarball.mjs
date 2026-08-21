import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = process.cwd();
const coreDir = join(root, 'packages', 'core');
const packageName = '@erzhan_npm/docx-editor-core';
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const bun = process.platform === 'win32' ? 'bun.exe' : 'bun';

const run = (command, args, options = {}) =>
  execFileSync(command, args, { cwd: root, stdio: 'inherit', ...options });

const runText = (command, args) =>
  execFileSync(command, args, { cwd: root, encoding: 'utf8' }).trim();

const isClean = () => {
  try {
    run('git', ['diff', '--quiet']);
    run('git', ['diff', '--cached', '--quiet']);
  } catch {
    throw new Error('Working tree is not clean. Commit or stash changes before packaging.');
  }
};

const findTarball = (directory) => {
  const filename = readdirSync(directory).find((file) => file.endsWith('.tgz'));
  if (!filename) throw new Error(`Tarball was not created in ${directory}`);
  return join(directory, filename);
};

if (process.argv.includes('--version')) {
  const manifest = JSON.parse(readFileSync(join(coreDir, 'package.json'), 'utf8'));
  console.log(manifest.version);
  process.exit(0);
}

isClean();

const manifest = JSON.parse(readFileSync(join(coreDir, 'package.json'), 'utf8'));
const version = manifest.version;
const sourceCommit = runText('git', ['rev-parse', 'HEAD']);
const buildStage = mkdtempSync(join(tmpdir(), `docx-core-source-${version}-`));
const publishStage = mkdtempSync(join(tmpdir(), `docx-core-publish-${version}-`));
const outputStage = mkdtempSync(join(tmpdir(), `docx-core-output-${version}-`));

run(bun, ['run', '--filter', '@docx-editor.dev/core', 'build']);
run(bun, ['run', 'build:packages']);
run(bun, ['run', 'notices:generate']);

run(npm, ['pack', coreDir, '--ignore-scripts', '--pack-destination', buildStage]);
run('tar', ['-xf', findTarball(buildStage), '--strip-components=1', '-C', publishStage]);

run(npm, [
  'pkg',
  'set',
  `name=${packageName}`,
  `version=${version}`,
  'publishConfig.access=public',
  'repository.type=git',
  'repository.url=git+https://github.com/pixel1401/docx-editor_swe.git',
  `forkSource=feat/free-insert-field-sdt@${sourceCommit}`,
  '--prefix',
  publishStage,
]);
run(npm, [
  'pkg',
  'delete',
  'scripts',
  'devDependencies',
  'repository.directory',
  '--prefix',
  publishStage,
]);
run(npm, ['pack', publishStage, '--pack-destination', outputStage]);

const tarball = findTarball(outputStage);
console.log(`\nReady: ${tarball}`);
console.log(`Check: ${npm} publish ${JSON.stringify(tarball)} --access public --dry-run`);
console.log(
  `Publish: ${npm} publish ${JSON.stringify(tarball)} --access public --userconfig /tmp/npm-publishrc`
);
