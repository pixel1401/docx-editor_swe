# Сборка и публикация SWE core

Этот файл описывает выпуск изменённого бесплатного пакета `core`.

Исходный код находится в ветке `feat/free-insert-field-sdt`.
Собранный npm-пакет не должен изменять структуру исходного monorepo.

## Основные понятия

| Объект                        | Назначение                           |
| ----------------------------- | ------------------------------------ |
| `feat/free-insert-field-sdt`  | Исходный код SWE-изменений           |
| `packages/core/src`           | Исходный код бесплатного core        |
| `packages/core/dist`          | Результат локальной сборки           |
| `pkg/core-field-sdt`          | Готовый пакет для установки с GitHub |
| `@pixel1401/docx-editor-core` | Рекомендуемое имя пакета в npm       |

Папка `packages/core/dist` находится в `.gitignore`.
Не добавляйте её в `feat/free-insert-field-sdt`.

## Что создаёт build

Команда сборки запускает `tsup` и компиляцию CSS.
Она создаёт файлы JavaScript, TypeScript declarations, CSS и WASM.

Основные результаты находятся в `packages/core/dist`:

- `index.js` и `index.cjs`;
- `index.d.ts` и другие TypeScript declarations;
- `editor.css`;
- `harfbuzz.wasm`;
- внутренние JavaScript chunks.

Файлы `src/*.ts` не используются приложением напрямую.
`office_web` устанавливает готовые файлы из `dist`.

## Подготовка рабочего окружения

Выполните эти команды после нового клонирования репозитория:

```powershell
cd C:\workspace\github\docx-editor-fork
git switch feat/free-insert-field-sdt
git pull --ff-only origin feat/free-insert-field-sdt

bun install --frozen-lockfile
```

Проверьте текущую ветку и рабочее дерево:

```powershell
git branch --show-current
git status --short
```

Рабочее дерево должно быть чистым перед началом выпуска.

## Сборка после изменения исходного кода

Сначала сохраните и отправьте изменения исходного кода:

```powershell
git add packages/core/src/path/to/changed-file.ts .changeset/change-name.md
git commit -m "feat(core): describe the change"
git push origin feat/free-insert-field-sdt
```

Добавьте только существующие изменённые пути.
Не добавляйте отсутствующие каталоги из примера.

Запустите проверки core:

```powershell
bun run --filter '@docx-editor.dev/core' typecheck
bun test packages/core/src/editor/__tests__/insert-field-sdt-command.test.ts
bun test packages/core/src/editor/__tests__/content-control-range-deletion.test.ts
bun run api:check
```

Запустите полный lint, если изменение затрагивает production-код:

```powershell
bun run lint
```

Создайте production build:

```powershell
bun run --filter '@docx-editor.dev/core' build
```

Проверьте, что новая команда присутствует в build:

```powershell
rg -n "insertFieldSdt|removeContentControl" packages/core/dist
```

## Создание обязательных notices

Apache-2.0 и лицензии встроенных зависимостей должны попасть в пакет.
Репозиторий генерирует `THIRD_PARTY_NOTICES.md` из build metadata.

Используйте полный release build перед публикацией:

```powershell
bun run build:packages
bun run notices:generate
```

Проверьте наличие файлов:

```powershell
Get-Item packages/core/LICENSE
Get-Item packages/core/THIRD_PARTY_NOTICES.md
Get-ChildItem packages/core/licenses
```

## Создание npm tarball

Не переименовывайте `packages/core` внутри source-ветки.
React workspace ожидает имя `@docx-editor.dev/core`.

Создайте отдельный staging-каталог:

```powershell
$PackageVersion = "2.5.0"
$SourceCommit = git rev-parse HEAD
$BuildStage = Join-Path $env:TEMP "docx-core-source-$PackageVersion"
$PublishStage = Join-Path $env:TEMP "docx-core-publish-$PackageVersion"
$OutputStage = Join-Path $env:TEMP "docx-core-output-$PackageVersion"

New-Item -ItemType Directory -Path $BuildStage
New-Item -ItemType Directory -Path $PublishStage
New-Item -ItemType Directory -Path $OutputStage
```

Создайте исходный tarball из `packages/core`:

```powershell
Push-Location packages/core
npm.cmd pack --ignore-scripts --pack-destination $BuildStage
Pop-Location

$SourceTarball = Get-ChildItem -LiteralPath $BuildStage -Filter *.tgz |
    Select-Object -First 1

tar -xf $SourceTarball.FullName --strip-components=1 -C $PublishStage
```

Измените metadata только в staging-каталоге:

```powershell
npm.cmd pkg set `
    "name=@pixel1401/docx-editor-core" `
    "version=$PackageVersion" `
    "publishConfig.access=public" `
    "repository.type=git" `
    "repository.url=git+https://github.com/pixel1401/docx-editor_swe.git" `
    "forkSource=feat/free-insert-field-sdt@$SourceCommit" `
    --prefix $PublishStage

npm.cmd pkg delete scripts devDependencies repository.directory `
    --prefix $PublishStage
```

Удаление `scripts` важно.
Готовый пакет уже содержит `dist` и не должен собираться при установке.

Создайте финальный npm tarball:

```powershell
npm.cmd pack $PublishStage --pack-destination $OutputStage
Get-ChildItem -LiteralPath $OutputStage
```

## Проверка tarball перед публикацией

Проверьте список файлов без публикации:

```powershell
$FinalTarball = Get-ChildItem -LiteralPath $OutputStage -Filter *.tgz |
    Select-Object -First 1

npm.cmd publish $FinalTarball.FullName --access public --dry-run
```

Проверьте следующие условия:

- package name равен `@pixel1401/docx-editor-core`;
- version равна новой версии;
- пакет содержит `dist`;
- пакет содержит `LICENSE` и `THIRD_PARTY_NOTICES.md`;
- пакет не содержит `.env`, токены или DOCX-файлы пользователей;
- поле `forkSource` содержит правильный source commit.

## Первая публикация в npm

Сначала авторизуйтесь:

```powershell
npm.cmd login
npm.cmd whoami
```

Для прямой публикации npm требует двухфакторную аутентификацию.
Первый public scoped release требует `--access public`.

Опубликуйте проверенный tarball:

```powershell
npm.cmd publish $FinalTarball.FullName --access public
```

Не публикуйте, если `npm publish --dry-run` показал неправильные файлы.

Опубликованную комбинацию package name и version нельзя использовать повторно.
Увеличивайте version для каждого нового выпуска.

## Рекомендуемая схема версий

Первая SWE-версия на базе upstream `2.5.0`:

```text
@pixel1401/docx-editor-core@2.5.0
```

Следующие SWE-исправления:

```text
2.5.1
2.5.2
2.5.3
```

После перехода на upstream `2.6.0` используйте версию `2.6.0` или выше.

Не используйте prerelease-версию без отдельной проверки peer dependencies.
`@docx-editor.dev/react` проверяет semver-диапазон core.

## Подключение npm-пакета в office_web

React adapter ожидает module path `@docx-editor.dev/core`.
Используйте npm alias, чтобы не менять imports в приложении:

```json
{
  "dependencies": {
    "@docx-editor.dev/core": "npm:@pixel1401/docx-editor-core@2.5.0",
    "@docx-editor.dev/react": "^2.5.0"
  }
}
```

Обновите и проверьте `office_web`:

```powershell
cd C:\workspace\portal\office_web
npm.cmd install
npm.cmd ls @docx-editor.dev/core @docx-editor.dev/react
npm.cmd run tsc
npm.cmd run build
```

Вывод `npm ls` должен показывать один deduplicated core.

## Выпуск после следующего изменения

Для каждого следующего изменения выполните этот цикл:

1. Измените код в `feat/free-insert-field-sdt`.
2. Добавьте или обновите тесты.
3. Запустите typecheck, тесты, lint и API check.
4. Создайте production build.
5. Создайте notices.
6. Увеличьте npm version.
7. Создайте новый staging tarball.
8. Выполните `npm publish --dry-run`.
9. Опубликуйте tarball.
10. Обновите npm alias в `office_web`.

`package-lock.json` фиксирует конкретный npm release.
Приложение не обновится автоматически после изменения source-ветки.

## GitHub package-ветка

Ветка `pkg/core-field-sdt` содержит готовый GitHub-пакет.
Она нужна только до перехода `office_web` на npm alias.

После успешной npm-публикации используйте npm как основной источник.
Не объединяйте `pkg/core-field-sdt` с `main` или source-веткой.

## Типовые ошибки

### `ENEEDAUTH`

Выполните `npm login`, затем проверьте `npm whoami`.

### `E403` при публикации

Проверьте npm scope, 2FA, package name и новую version.
Вы не можете публиковать `@docx-editor.dev/core` без прав этого scope.

### `Cannot publish over existing version`

Увеличьте `PackageVersion` и создайте tarball заново.

### `tsup` не найден

Выполните `bun install --frozen-lockfile` в корне monorepo.

### Пакет не содержит `dist`

Снова выполните build перед `npm pack`.

### Приложение использует старый core

Обновите npm alias и `package-lock.json`.
Затем перезапустите Vite с `--force`.

```powershell
npx vite --force --mode=dev
```
