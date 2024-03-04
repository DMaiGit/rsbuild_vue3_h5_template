<h1 align="center">🚀 RSBuild Vue3 H5 Template 🌟</h1>
<p align="center">
🛠 This Vue 3 template, integrated with RSBuild, streamlines development and build processes with popular libraries such as Axios, Pinia, Vant, and Vue Router. 📚
</p>

<p align="center">
  <a href="./README.md">🇬🇧 English</a>
  &nbsp;|&nbsp;
  <a href="./README.zh-CN.md">🇨🇳 简体中文</a>
</p>

---

## 🗂 Table of Contents

- [Requirements](#-requirements)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Features](#-features)

## 📋 Requirements

- **Node.js** >= 20 🟢
- **npm** >= 10 📦
- **Vue** 3 ⚡
- **Vue Router** >= 4 🚦
- **Pinia** >= 2 🌲
- **TypeScript** >= 5 📘
- **Vant-Ui** 4 📱
- **Axios** >= 1.6 🌐

> **💡 Tip**: 🚀 Use PNPM to unlock RSBuild's full debug capabilities! 🛠 Without PNPM, you might miss out on `rsbuild`'s debug features.

## 📁 Project Structure

Below is the tree structure of the project, providing an overview and purpose of each file and directory:

```plaintext
root
├── .husky/                    # Husky hooks for enforcing good commit practices
├── .vscode/                   # VSCode specific settings
├── dist/                      # Compiled files ready to be deployed
├── public/                    # Public assets that will not be processed by Webpack
│   ├── favicon.ico            # Favicon for the website
│   └── index.html             # Entry HTML for the application
├── src/                       # Source code of the application
│   ├── @types/                # TypeScript typings specific to the project
│   ├── api/                   # API service functions and setup
│   ├── assets/                # Static assets such as images and global styles
│   │   └── images/            # Images used within the application
│   ├── components/            # Reusable Vue components
│   ├── mock/                  # Mock data for testing and development
│   ├── routes/                # Application routing definitions
│   ├── static/                # Static files that are copied to the output directory
│   │   └── fonts/             # Fonts used in the application
│   ├── stores/                # Pinia stores for state management
│   ├── styles/                # Global and modular styles
│   ├── utils/                 # Utility and helper functions
│   ├── views/                 # Vue components that act as pages
│   │   └── main/              # Main views of the application
│   ├── App.vue                # Root Vue component
│   ├── env.d.ts               # Environment variable typings for TypeScript
│   └── index.ts               # Main entry point for the Vue application
├── .browserslistrc            # Browser compatibility configuration
├── .editorconfig              # Coding style definitions for IDEs
├── .env.development           # Environment variables for development
├── .env.local                 # Local environment variables
├── .env.production            # Environment variables for production
├── .eslintrc.js               # ESLint rules and configurations
├── .gitignore                 # Specifies files to be ignored in version control
├── commitlint.config.js       # Configuration for commit message linting
├── package.json               # Project metadata and dependencies
├── postcss.config.js          # Configuration for PostCSS
├── README.md                  # The descriptive file for the project
├── README.zh-CN.md            # Chinese version of the README, provides project details for Chinese-speaking users.
├── rsbuild.config.ts          # Configuration file for RSBuild, which is used to define and manage build tasks and project build settings.
├── tailwind.config.js         # Tailwind CSS configuration file, used to customize Tailwind's default settings to match the project's design requirements.
└── tsconfig.json              # TypeScript compiler configuration file, defines how TypeScript compiles the code.    
```        

## 🚀 Quick Start

```bash
npm install       # 📦 Install project dependencies
npm run dev       # 🌈 Start the development server
npm run dev-debug # 🔍 Start with RSBuild debug
npm run build     # 🏗 Build for production
npm run build-debug # 🔧 Build for production with RSBuild debug
npm run preview   # 🎥 Preview the built project
npm run test      # 🧪 Run tests (not specified yet)
npm run prepare   # 📌 Prepare Husky
npm run commit    # 💬 Run Commitizen for commits
```

## ✨ Features
  - Vue 3: Progressive JavaScript framework for UI development. 🎉
  - Axios: Promise-based HTTP client. 🌍
  - Pinia: State management for Vue. 🗃
  - Vant: Mobile-first Vue UI library. 📱
  - Vue Router: Official router for Vue.js. 🛣
  - TypeScript: JavaScript with type safety. 📜
  - Tailwind CSS: Utility-first CSS framework. 💅
  - ##### 🛠 Development Tools and Libraries
  - @commitlint/cli & @commitlint/config-conventional: Ensures commit messages follow the conventional commit format. 📝
  - cross-env: Sets environment variables across platforms. 🌐
  - eslint-plugin-vue & @typescript-eslint/eslint-plugin: Provides linting for Vue and TypeScript files. 🔍
  - husky & commitizen: Manages Git hooks and commit message formats. 🐶
  - vue-tsc & tailwindcss: Supports type checking for Vue and utility-first styling with Tailwind CSS. 🎨
