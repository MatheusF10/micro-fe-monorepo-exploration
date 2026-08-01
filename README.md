# Micro Frontend Monorepo Exploration

A monorepo starter project for exploring independent React micro frontends using Vite, TypeScript, and Lerna.

This repository contains two standalone micro frontend packages under `src/packages/*`:

- `src/packages/micro-fe-1`
- `src/packages/micro-fe-2`

Each package is designed to run independently and be published or downloaded as a standalone release.

## Project Intent

The goal of this project is to experiment with a micro frontend architecture inside a single repository, while keeping each frontend:

- isolated by package
- runnable locally with its own Vite configuration
- packaged independently for release
- versioned using Lerna independent mode

This setup is useful for learning how to manage multiple React micro frontends with shared dependencies in a monorepo.

## Technologies

- React 19
- TypeScript 6
- Vite 8
- Lerna 6 (independent versioning)
- npm workspaces
- Oxlint for linting

## Package Structure

Each micro frontend includes:

- `app.tsx` — package entry component
- `index.html` — standalone HTML shell
- `src/index.tsx` — mounting entry point
- `src/components` — reusable UI components
- `src/hooks` — local hooks
- `package.json` — package metadata and scripts
- `tsconfig.json` — package TypeScript settings
- `vite.config.ts` — package build/dev config

## Getting Started

Install dependencies and bootstrap the repository:

```bash
npm install
npm run bootstrap
```

### Run a micro frontend locally

Open a terminal in the package folder and start Vite:

```bash
cd src/packages/micro-fe-1
npm run dev
```

Or:

```bash
cd src/packages/micro-fe-2
npm run dev
```

Then open the displayed localhost URL in your browser.

## Build

Build the entire monorepo using:

```bash
npm run build
```

Build a single package from its directory:

```bash
cd src/packages/micro-fe-1
npm run build
```

## Release and Packaging

This repository is structured so each micro frontend can be exported or published independently. When downloading from GitHub releases, each package directory contains its own `package.json`, build scripts, and standalone Vite app.

## Notes

- Root workspace config is managed from `package.json` and `lerna.json`.
- The monorepo uses independent versioning for each micro frontend.
- Shared dependencies are hoisted through npm workspaces and Lerna.

## License

This project is open source and available for experimentation and learning.
