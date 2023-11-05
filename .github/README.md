# Monorepo template

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## Requirements

- [git]
- [Node.js] and [pnpm] - pnpm has built-in-support for [workspaces]
- [VS Code] or [Webstorm]
- [nvm]

## Use your own

1. Create new repository

  - Grab the repository

  ```bash
  # Create repository on GitHub
  npx degit nandordudas/monorepo-template my-project-name && cd $_
  git init
  git add .
  git commit -m "chore: initial commit"
  # Set created repository's origin and push your code into it
  ```

  - Or use as a template on your GitHub own profile

2. Replace `author` and `description` indide [package.json] file.

## Devcontainer

> **Note**
> Using Devcontainer is not mandatory, just suggested!

The project accommodates the devcontainer feature, housed within the [devcontainer.json] file, which contains all
necessary requirements and setup procedures.

> [!IMPORTANT]
> It's necessary to have VS Code equipped with the [Dev Containers] extension. Along with [WSL 2] on Windows using the
[WSL] extension.

Simply re-access the project within Devcontainer, allow some time, and it's all done. All VS Code extensions, settings,
system configurations, and other elements will be established.

You can update other requirements inside Devontainer setup and you don't need to use `json` format only. If you need
more specific configuration like you need `postgres` or other containers, you can add `docker-compose.yml` file. This
file need to imported by `devcontainer.json` and [use Docker Compose].

> **Note**
> If you are using `Codespaces` on GitHub use environment variables carefully because codespace will fail if files are
> missing.

## Recommended Git configuration

The followwing settings are just recommendations.

<details>
  <summary>Git configuration</summary>
  <br>

  Please replace your own data; name, email (and GPG key). Using [dotfiles] is much smarter approach.

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

  # If you have no GPG sign yet
  # gpg --quick-generate-key "John Doe <john.doe@email.com>" "ed25519/cert,sign+cv25519/encr"
  git config --global commit.gpgSign true
  git config --global tag.forceSignAnnotated true
  git config --global tag.gpgSign true
  # List exisiting keys
  # gpg --list-secret-keys --keyid-format long
  git config --global user.signingKey "0123456789ABCDEF"

  # You can save your GPG keys indide a priveate repository and reuse them in the future
  # Export exsiting keys
  # gpg --export-secret-key --armor <signing_key> >secret.key
  # gpg --export --armor <signing_key> >public.key
  # Importing keys
  # gpg --import private.key
  # gpg --import public.key

  # Reload Git configuration
  git config --list --show-origin
  ```
</details>

<!-- Use path related to root. -->
[devcontainer.json]: ./.devcontainer/devcontainer.json
[package.json]: ./package.json

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
