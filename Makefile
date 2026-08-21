SHELL := /bin/bash

CORE_DIR := packages/core
PACKAGE_NAME := @erzhan_npm/docx-editor-core

.PHONY: npm-tarball npm-version

## Show the version that will be packaged.
npm-version:
	@node scripts/create-core-npm-tarball.mjs --version

## Build a publish-ready tarball. Publishing is intentionally manual.
npm-tarball:
	@node scripts/create-core-npm-tarball.mjs
