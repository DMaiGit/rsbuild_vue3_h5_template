<h1 align="center">🚀 RSBuild Vue3 H5 模板 🌟</h1>
<p align="center">
🛠 这是一个集成了 RSBuild 的 Vue 3 项目模板，它简化了开发和构建流程，并包含了如 Axios、Pinia、Vant 和 Vue Router 等流行库。 📚
</p>

<p align="center">
  <a href="./README.md">🇬🇧 English</a>
  &nbsp;|&nbsp;
  <a href="./README.zh-CN.md">🇨🇳 简体中文</a>
</p>

---

## 🗂 目录导航

- [要求](#-要求)
- [目录结构](#-目录结构)
- [快速开始](#-快速开始)
- [特性](#-特性)

## 📋 要求

- **Node.js** >= 20 🟢
- **npm** >= 10 📦
- **Vue** 3 ⚡
- **Vue Router** >= 4 🚦
- **Pinia** >= 2 🌲
- **TypeScript** >= 5 📘
- **Vant-Ui** 4 📱
- **Axios** >= 1.6 🌐

> **💡 提示**: 🚀 使用 PNPM 来发挥 RSBuild 的全部调试能力！🛠 如果不使用 PNPM，您可能无法使用 rsbuild 的调试功能。

## 📁 目录结构

下面是项目的目录结构，提供了每个文件和目录的概览和用途：

```plaintext
root
├── .husky/               # Husky 钩子配置和脚本
├── .vscode/              # VSCode 特定设置
├── dist/                 # 编译后的文件，准备部署
├── public/               # 公共静态资源，不会被 Webpack 处理
│   ├── favicon.ico       # 网站图标
│   └── index.html        # 应用的入口 HTML 文件
├── src/                  # Vue.js 应用程序的源代码
│   ├── @types/           # 项目特定的 TypeScript 声明文件
│   ├── api/              # 服务和 API 调用函数
│   ├── assets/           # 静态资源，如图片和全局样式
│   │   └── images/       # 应用程序的图片文件
│   ├── components/       # 可重用的 Vue 组件
│   ├── mock/             # 测试和开发用的模拟数据
│   ├── routes/           # 路由配置和路由定义
│   ├── static/           # 静态文件，如字体和图标
│   │   └── fonts/        # 应用程序的字体文件
│   ├── stores/           # 使用 Pinia 进行状态管理
│   ├── styles/           # 样式文件，包括全局样式
│   ├── utils/            # 实用函数和助手
│   ├── views/            # 表示不同视图/页面的 Vue 文件
│   │   └── main/         # 应用程序的主要视图组件
│   ├── App.vue           # 主 Vue 应用程序组件
│   ├── env.d.ts          # 环境变量的类型声明
│   └── index.ts          # 应用程序的主入口点
├── .browserslistrc       # 浏览器兼容性配置
├── .editorconfig         # 各种编辑器和 IDE 的代码样式配置
├── .env.development      # 开发环境的环境变量
├── .env.local            # 个人覆盖的本地环境变量
├── .env.production       # 生产环境的环境变量
├── .eslintrc.js          # ESLint 的规则和配置
├── .gitignore            # 指定 Git 版本控制中要忽略的文件
├── README.zh-CN.md       # 为中文用户提供的项目详细信息的 README 文件
├── rsbuild.config.ts     # RSBuild 配置文件，用于定义和管理构建任务和项目构建设置
├── tailwind.config.js    # Tailwind CSS 的配置文件，用于自定义 Tailwind 的默认设置以符合项目的设计要求
└── tsconfig.json         # TypeScript 编译器配置文件，定义了 TypeScript 如何编译代码
```

## 🚀 快速开始

要开始开发，请运行以下命令：

```bash
npm install       # 📦 安装项目依赖
npm run dev       # 🌈 启动开发服务器
npm run dev-debug # 🔍 开启 RSBuild 调试模式
npm run build     # 🏗 构建生产版本
npm run build-debug # 🔧 开启 RSBuild 调试模式下构建生产版本
npm run preview   # 🎥 预览构建项目
npm run test      # 🧪 运行测试（尚未指定）
npm run prepare   # 📌 准备 Husky 钩子
npm run commit    # 💬 运行 Commitizen 格式化提交信息
```

## ✨ 特性
  - **Vue 3**: 用于 UI 开发的渐进式 JavaScript 框架。🎉
- **Axios**: 基于 Promise 的 HTTP 客户端。🌍
- **Pinia**: Vue 的状态管理库。🗃
- **Vant**: 面向移动端的 Vue UI 库。📱
- **Vue Router**: Vue.js 的官方路由。🛣
- **TypeScript**: 带有类型安全的 JavaScript。📜
- **Tailwind CSS**: 实用优先的 CSS 框架。💅
- ##### 🛠 开发工具和库
- **@commitlint/cli & @commitlint/config-conventional**: 确保提交信息遵循常规提交格式。📝
- **cross-env**: 跨平台设置环境变量。🌐
- **eslint-plugin-vue & @typescript-eslint/eslint-plugin**: 为 Vue 和 TypeScript 文件提供代码检查。🔍
- **husky & commitizen**: 管理 Git 钩子和提交信息格式。🐶
- **vue-tsc & tailwindcss**: 支持 Vue 的类型检查和 Tailwind CSS 的实用优先样式。🎨
