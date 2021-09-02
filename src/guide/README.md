# Installation

LibTelegram is designed in such a way that it can be implemented gradually. This means that it can be integrated into a project in several ways, depending on the requirements.

There are some basic ways to connect LibTelegram to a project:

1. Download js files and [place them yourself](#local-installation) 
2. Install with [npm](#npm) 
3. Use the official [CLI](#cli) to create a project that provides included build settings for a modern backend workflow (like hot-reload, lint-on-save, and more) 

## Release Notes

Lastet version: ![npm](https://img.shields.io/npm/v/libtelegram/latest.svg)

Detailed release notes for each version are available at [GitHub](https://github.com/libtelegram/libtelegram/blob/master/CHANGELOG.md).

## Local installation

If you want to avoid installing the tools, then you can download the latest version of LibTelegram from [GitHub](https://github.com/libtelegram/libtelegram/) and connect using `require`

## npm

`npm` is the recommended installation method for developing large extensible projects with LibTelegram. Use below command to install latest stable version of LibTelegram

```bash
$ npm install libtelegram
```

## CLI
> Currently in internal testing - development is still pending.

LibTelegram provides an [official CLI](https://github.com/libtelegram/cli) for quickly creating ambitious telegram bots. It provides included build customizations for a modern workflow. It only takes a few minutes to get started with hot-reload, lint-on-save and production-ready assemblies. More information can be found in the [LibTelegram CLI  documentation](/guide/cli).

::: tip Tip
The CLI assumes prior knowledge of Node.js and related build tools. If you are new to LibTelegram or the CLI, we strongly recommend that you review the [tutorial](./getting-started.html) without any build tools before using the CLI.
:::

To install CLI you can use following command:

```bash
$ npm install -g @libtelegram/cli
```
