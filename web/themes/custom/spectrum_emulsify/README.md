# spectrum_emulsify

No description was supplied during generation.

This is the project-owned Emulsify child theme for **spectrum_emulsify**, with a Vite-based build workflow and Storybook.
Shared tooling comes from Emulsify Core; the project owns its templates and components.

|   |   |
|---|---|
| Machine name | `spectrum_emulsify` |
| Drupal metadata | `spectrum_emulsify.info.yml` |
| Project metadata | [`project.emulsify.json`](project.emulsify.json) |
| Generated from | `emulsify-drupal` `7.2.1` |
| Expected Emulsify Core range | `^4.3.1` |

## Quick start

Use Node.js 24 or newer. If you use nvm, select the recommended version first:

```bash
nvm install
nvm use
```

Then install the shared tooling:

```bash
npm install
```

The generated theme does not include project asset source files or active asset references. Its Drupal library file contains commented CSS and JavaScript examples to update after installing the project's component library. Install that library before running development and build commands.

## Documentation

- [Development guide](./docs/development.md) - Setup, commands, assets, and project ownership.
- [Upgrading](./docs/upgrading.md) - Dependency updates and starter-release comparisons.
- [Troubleshooting and support](./docs/support-information.md) - Common fixes and a sanitized diagnostic checklist.
