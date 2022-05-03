# Haiilo SVG Icons

[![Build](https://github.com/haiilo/catalyst-icons/actions/workflows/build.yml/badge.svg)](https://github.com/haiilo/catalyst-icons/actions/workflows/build.yml)
[![Release](https://github.com/haiilo/catalyst-icons/actions/workflows/release.yml/badge.svg)](https://github.com/haiilo/catalyst-icons/actions/workflows/release.yml)
[![Deploy](https://github.com/haiilo/catalyst-icons/actions/workflows/pages.yml/badge.svg)](https://github.com/haiilo/catalyst-icons/actions/workflows/pages.yml)

This project contains all icons for the Catalyst design system custom SVG icon
set.

## Getting started

Install `@haiilo/catalyst-icons` in your Node.js powered apps with the
[npm package](https://www.npmjs.com/package/@haiilo/catalyst-icons):

```shell
npm install @haiilo/catalyst-icons
```

## Add new icons via web

1. Go to [Code > src](https://github.com/haiilo/catalyst-icons/tree/main/src)
and upload your new icon to the `src` directory. This can be done via the menu
on the top right or simply by dragging your icon into the web browser.
2. Stick to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for your commit message, e.g. _feat: add new RTE icons_
3. Navigate to [Actions > Release](https://github.com/haiilo/catalyst-icons/actions/workflows/release.yml) and trigger a manual CI release by clicking the `Run workflow`
button (Branch: `main` / Release level: `patch`).

## Contributing

If you want to add a new icon to this repository, please make sure that your SVG
icon conforms with the overall structure of the other SVG icons:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="{{ICON_PATH}}"/>
</svg>
```

### Package management

This project is using [npm](https://www.npmjs.com/) as a package manager. This
is especially important if you want to add new dependencies to a project and
fail to provide an updated `package-lock.json`. This will cause the CI build to
fail. If dependencies in the package lock do not match those in `package.json`,
npm will exit with an error in the CI build, instead of updating the package
lock.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in
the `dist` directory. SVG sprites and style definitions for different
preprocessors will automatically be generated in `dist/style` and `dist/svg`
respectively. Also, standalone HTML previews will become available in the `dist`
directory.

### Publishing

The preferred way to publish a new release is via the corresponding GitHub
Actions CI workflow. Navigate to [Actions > Release](https://github.com/haiilo/catalyst-icons/actions/workflows/release.yml)
and trigger a manual CI release by clicking the `Run workflow` button
(Branch: `main` / Release level: `patch`).

The library can also be published locally by running `npm publish`. To simplyfy
the manual release process, you can use the following npm commands:

 * **npm run release:major** releases a new *major* version
 * **npm run release:minor** releases a new *minor* version
 * **npm run release:patch** releases a new *patch* version

## Code Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/haiilo/catalyst-icons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=haiilo/catalyst-icons" />
</a>

## License

The license is available within the main repository in the
[LICENSE](https://github.com/haiilo/catalyst/blob/main/LICENSE) file.
