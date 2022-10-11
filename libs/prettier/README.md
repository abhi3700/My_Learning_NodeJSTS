# Prettier

## About

Prettier is an opinionated code formatter for all languages.

## Installation

- nvm, nodejs, npm/yarn
- Add to project: `$ yarn add prettier -D`. (for adding to `devDependencies`).

## Getting Started

**Procedure**:

- Just add these 2 files: [`.prettierrc`](./.prettierrc) & [`.prettierignore`](./.prettierignore).
- One can modify the settings in `.prettierrc` file. E.g. disable `trailingComma`, disable semi-colon, etc.

## Running

- Run: `$ yarn prettier --write .` (for all files in current directory).
- Run: `$ yarn prettier --write src/**/*.{js,jsx,ts,tsx}` (for all files in `src` directory).
- Run: `$ yarn prettier --write src/**/*.{js,jsx,ts,tsx} --ignore-path .prettierignore` (for all files in `src` directory except those in `.prettierignore`).
- Run: `$ yarn prettier --write src/**/*.{js,jsx,ts,tsx} --ignore-path .prettierignore --check` (for all files in `src` directory except those in `.prettierignore` & check if any file is not formatted).
