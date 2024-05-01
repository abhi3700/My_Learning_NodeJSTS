# Tools

## Bun vs yarn vs npm

| Topic | Bun | yarn | npm |
| --- | --- | --- | --- |
| website | [bun](https://bun.sh/) | [yarn](https://yarnpkg.com/) | [npm](https://www.npmjs.com/) |
| initialize package | `bun init --yes` | `yarn init -y` | `npm init -y` |
| install package| `bun install` | `yarn add` | `npm install` |
| Add dependency | `bun add <PACKAGE_NAME>` | `yarn add <PACKAGE_NAME>` | `npm install <PACKAGE_NAME>` |
| Add dev dependency | `bun add -d <PACKAGE_NAME>` | `yarn add --dev <PACKAGE_NAME>` | `npm install --save-dev <PACKAGE_NAME>` |
| Install package globally | `bun add -g <PACKAGE_NAME>` | `yarn add --global <PACKAGE_NAME>` | `npm install -g <PACKAGE_NAME>` |

## Workspaces

Using npm, this is how multiple workspaces are managed.

In a project directory, create a `package.json` file using `npm init -y`

```sh

❯ tree -L 2
.
├── LICENSE-LZBL-1.2
├── LICENSE-MIT
├── README.md
├── lib
│   └── forge-std
├── messagelib
│   ├── cache
│   ├── contracts
│   ├── foundry.toml
│   ├── node_modules
│   ├── out
│   ├── package.json
│   └── test
├── oapp
│   ├── cache
│   ├── contracts
│   ├── foundry.toml
│   ├── node_modules
│   ├── out
│   ├── package.json
│   └── test
├── output
│   ├── DVN.sh
│   ├── EndpointV2.sh
│   ├── MessageLibManager.sh
│   ├── OFT.sh
│   ├── ReceiveUln302.sh
│   └── SendUln302.sh
├── package.json
├── protocol
│   ├── cache
│   ├── contracts
│   ├── foundry.toml
│   ├── node_modules
│   ├── out
│   ├── package.json
│   └── test
└── yarn.lock
```

Now, there are 3 workspaces that you can see in `package.json` of the root directory.

```json
// Inside package.json

  "workspaces": [
    "protocol",
    "messagelib",
    "oapp"
  ],
  "scripts": {
    "clean": "$npm_execpath workspaces foreach --all run clean",
    "build": "$npm_execpath workspaces foreach --all run build",
    "test": "$npm_execpath workspaces foreach --all run test"
  },
```

Now, you can build, test and clean all the workspaces.

```sh
npm run build
npm run test
npm run clean
```

> For other tools like yarn, pnpm, bun, just replace `npm` with that.

So, this is how we manage multiple workspaces just like we do in Rust using `cargo`.
