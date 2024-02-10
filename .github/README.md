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

## Recommended Git Configuration

The following settings are recommended:

<details>
  <summary>Git configuration</summary>
  <br>

  Replace your own data; name, email (and GPG key). Using [dotfiles] is much smarter approach.

  ```bash
  # Important

  git config --global user.email john.doe@email.com
  git config --global user.name "John Doe" # Quotes are required
  # If you are using Windows operating system or .gitattributes file's missing
  # git config --global core.autocrlf true

  # Recommended

  # You can clone with "gh:nandordudas/monorepo-template" instead of hard links
  git config --global url."https://github.com/".insteadOf gh:

  # Advanced

  # If you are using VS Code
  git config --global core.editor "code --wait"
  # Only affect rebase
  # git config --global sequence.editor "code --wait"

  git config --global advice.detachedHead false
  git config --global branch.autoSetupRebase always
  git config --global core.untrackedCache true
  git config --global core.whitespace "fix,-indent-with-non-tab,trailing-space,cr-at-eol"
  # Security
  # git config --global credential.helper "cache --timeout 3600"
  git config --global fetch.prune true
  git config --global fetch.pruneTags true
  git config --global merge.ff only
  git config --global pull.rebase merges
  git config --global push.autoSetupRemote true
  git config --global push.default simple
  git config --global push.followTags true
  git config --global push.useForceIfIncludes true
  git config --global rebase.autoSquash true
  git config --global rebase.autoStash true
  git config --global rebase.updateRefs true
  git config --global remote.origin.fetch "+refs/pull/*/head:refs/remotes/pull_requests/*"
  git config --global user.useConfigOnly true

  # GPG related configuration (optional)
  # Don't forget to set your GPG key and enable it on GitHub as well in your profile settings
  # and repository settings

  # If you have no GPG sign yet
  # gpg --quick-generate-key "John Doe <john.doe@email.com>" "ed25519/cert,sign+cv25519/encr"
  git config --global commit.gpgSign true
  git config --global tag.forceSignAnnotated true
  git config --global tag.gpgSign true
  # List existing keys
  # gpg --list-secret-keys --keyid-format long
  git config --global user.signingKey "0123456789ABCDEF"

  # You can save your GPG keys indide a private repository and reuse them in the future
  # Export existing keys
  # gpg --export-secret-key --armor <signing_key> >secret.key
  # gpg --export --armor <signing_key> >public.key
  # Importing keys
  # gpg --import private.key
  # gpg --import public.key

  # Reload Git configuration
  git config --list --show-origin
  ```

  In summary, the recommended Git configuration is:

  ```properties
  [advice]
    detachedHead = false
  [branch]
    autoSetupRebase = always
  [commit]
    gpgSign = true
  [core]
    abbrev = 12
    autocrlf = input
    editor = code --wait
    fsmonitor = true
    pager = delta
    quotePath = false
    untrackedCache = true
    whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
  [fetch]
    prune = true
    pruneTags = true
    writeCommitGraph = true
  [merge]
    ff = only
  [pull]
    rebase = merges
  [push]
    autoSetupRemote = true
    default = simple
    followTags = true
    useForceIfIncludes = true
  [rebase]
    abbreviateCommands = true
    autoSquash = true
    autoStash = true
    updateRefs = true
  [tag]
    forceSignAnnotated = true
    gpgSign = true
    sort = version:refname
  [url "https://github.com/"]
    insteadOf = gh:
  [user]
    email = john.doe@email.com # Replace with your own email
    name = John Doe # Replace with your own name
    signingKey = 0123456789ABCDEF # Replace with your own GPG key
    useConfigOnly = true
  ```

  These configurations ensure a smooth Git workflow while accommodating personalization.
</details>

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
