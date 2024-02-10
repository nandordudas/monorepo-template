[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)
[![CI](https://github.com/nandordudas/monorepo-template/actions/workflows/ci.yml/badge.svg)](https://github.com/nandordudas/monorepo-template/actions/workflows/ci.yml)
[![CodeQL](https://github.com/nandordudas/monorepo-template/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/nandordudas/monorepo-template/actions/workflows/github-code-scanning/codeql)

# Overview

Welcome to the `Monorepo Template`, a project that serves as a starting point for building your own monorepository-based
applications. This README provides essential information on how to set up and use this template effectively.

## Requirements

Before you begin, make sure you have the following prerequisites installed on your development environment:

- [git]
- [Node.js] and [pnpm] - pnpm has built-in support for [workspaces]
- [VS Code] or [Webstorm]
- [nvm]

> [!NOTE]
> I recommend using Devcontainers for cross-platform compatibility and ease of use.

## Getting Started

1. Create a new repository

  - Clone the repository:

  ```bash
  # Create repository on GitHub
  npx degit nandordudas/monorepo-template my-project-name
  cd my-project-name # cd $_
  git init
  git add .
  git commit -m "chore: initial commit"
  # Set the origin of your new repository and push your code into it
  ```

  - Or use this template on your own GitHub profile.

2. Replace `author` and `description` indide [package.json] file.
3. Replace date and name inside [LICENSE] file.
4. Replace `nandordudas` with your own GitHub username inside [CODEOWNERS] file.

## Devcontainer

> [!NOTE]
> Using Devcontainers is not mandatory, but strongly recommended!

The project includes a Devcontainer configuration in the [devcontainer.json] file, which contains all the necessary
requirements and setup procedures.

> [!IMPORTANT]
> Make sure to have VS Code equipped with the [Dev Containers] extension. For Windows users, [WSL 2] is recommended
> using the [WSL] extension.

Simply re-access the project within Devcontainer, allow some time for setup, and you're good to go. All VS Code
extensions, settings, system configurations, and other elements will be established.

You can update other requirements inside the Devcontainer setup, and you're not limited to using only the `json` format.
If you need more specific configurations, such as adding a `postgres` or other containers, you can include a
`docker-compose.yml` file. This file needs to be imported by `devcontainer.json` and [use Docker Compose].

> [!NOTE]
> If you are using `Codespaces` on GitHub, use environment variables carefully, as Codespace may fail if files are
> missing.

__Let's get started with your project!__

<!-- Use path related to .github folder -->
[CODEOWNERS]: ../.github/CODEOWNERS
[devcontainer.json]: ../.devcontainer/devcontainer.json
[LICENSE]: ../LICENSE
[package.json]: ../package.json

[Dev Containers]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[dotfiles]: https://dotfiles.github.io/
[git]: https://git-scm.com/
[Node.js]: https://nodejs.org/en
[nvm]: https://github.com/nvm-sh/nvm
[pnpm]: https://pnpm.io/
[VS Code]: https://code.visualstudio.com/
[Webstorm]: https://www.jetbrains.com/webstorm/
[workspaces]: https://pnpm.io/workspaces
[use Docker Compose]: https://code.visualstudio.com/docs/devcontainers/create-dev-container#_use-docker-compose
[WSL 2]: https://learn.microsoft.com/en-us/windows/wsl/
[WSL]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl
