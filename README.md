# My_Learning_Javascript

Learn everything about Javascript

## About

- Node should not be used in CPU intensive work.

## Installation

### 1. NVM

To manage multiple versions of **Node.js**

- `$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
- list node versions using `$ nvm list`
- Use specific version using `$ nvm use <version_no>` E.g. `$ nvm use 16.13.1`
- Install a specific version of `node` via `nvm install <version_no>` E.g. `$ nvm install 14`

### 2. Node.js (`node` & `npm`)

#### M-1 [RECOMMENDED]

- Install the latest node via `nvm install node`
- Use the latest node via `nvm use node`
- Install the latest _lts_ node via `nvm install --lts`
- Use the latest _lts_ node via `nvm use --lts`

> NOTE: LTS: long term support in terms of stable & secure versions.

#### M-2

- Install Node & npm from [here](https://nodejs.org/en/download/)

> NOTE: Whenever `node` gets installed, `npm` also gets installed.

### 3. Yarn

`yarn` is relatively faster than `npm` because of **parallel** installation of dependency packages instead of **sequential**.

So, install using `npm`:

```console
$ npm install -g yarn
```

OR

```console
$ curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
```

Thereafter for a project, `yarn` can be used to install, test, coverage, etc, instead of `npm`.

[Docs](https://yarnpkg.com/)

To setup in Github Action for a repo, refer [this](https://github.com/abhi3700/my_coding_toolkit/blob/master/git_all.md#github-action).

## Features

- `jshint` can be used to get suggestions for better code in `js`.

  - `jshint app.js` can be used like this to find suggestions.
  - M-1: `.jshintrc` file can be added as inline configuration for the entire project in the root directory & adding it this:

  ```json
  {
    "esversion": 6
  }
  ```

  - M-2: Also this line can be added at the starting of the `.js` file. [Source](https://stackoverflow.com/a/35365041/6774636)

## Troubleshoot

### 1. `yarn.lock` conflict

- _Cause_: `yarn.lock` file conflicts are not resolved during PR.
- _Solution_: Just copy paste the `yarn.lock` file from the `main` branch & then run `$ yarn install` & then push commit. Your lock file is synced now.

## References

- [Node.js Tutorial for Beginners: Learn Node in 1 Hour](https://youtu.be/TlB_eWDSMt4)
