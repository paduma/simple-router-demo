# SimpleRouter 示例

中文 | [English](./README.md)

> 一个简单的示例，用于解释 Hash 路由和 History 路由的区别

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![CodeSandbox](https://img.shields.io/badge/CodeSandbox-Demo-blue)](https://codesandbox.io/p/sandbox/mvl33t)

## 📖 简介

手写简单路由库，演示 Hash 路由和 History 路由的差异及后端配置需求。适合学习前端路由原理。

## 🛠️ 技术栈

### 前端
- **Vanilla JavaScript** - 纯原生 JS，无框架依赖
- **HTML5 History API** - History 路由实现
- **CSS3** - 样式和动画

### 后端
- **Node.js** - JavaScript 运行时
- **HTTP Module** - 原生 HTTP 服务器
- **Express** - (可选) Web 框架

### 部署
- **Docker** - 容器化部署
- **Nginx** - 生产环境 Web 服务器
- **Vercel/Netlify** - Serverless 部署平台

## ✨ 特性

- ✅ 纯原生 JavaScript 实现
- ✅ 支持动态路由参数（如 `/user/:id`）
- ✅ 路由守卫（beforeEach）
- ✅ 404 路由处理
- ✅ 完整的前后端示例
- ✅ Docker 一键部署

## 🚀 快速开始

### 方式1：在线演示

**在线 Demo：** [即将上线 - 部署到 Vercel]

纯前端版本：[CodeSandbox](https://codesandbox.io/p/sandbox/mvl33t)

### 方式2：GitHub Codespaces

1. Fork 本仓库
2. 点击 "Code" → "Codespaces" → "Create codespace"
3. 运行 `npm start`
4. 将端口 3000 设为公开（PORTS 标签 → 右键 → "Port Visibility" → "Public"）
5. 分享公开 URL

**最适合演示 History 路由** - 支持页面刷新而不会出现 404 错误！

### 方式3：本地 Node.js 服务器

```bash
npm start
# 访问 http://localhost:3000
```

### 方式4：Docker

```bash
docker-compose up -d
# 访问 http://localhost:8080
```

## 🌐 部署你自己的版本

### 部署到 Vercel（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/simple-router-demo)

1. 点击上方按钮
2. 连接你的 GitHub 账号
3. 部署！

Vercel 将自动：
- 从 `client/` 提供静态文件
- 配置 History 路由（通过 `vercel.json`）
- 提供永久公开 URL

## 📚 Hash 路由 vs History 路由

### Hash 路由

无需服务器配置，可直接在浏览器中打开。

修改 `client/index.html`：
```javascript
<script src="simple-hash-router.js"></script>
const router = new SimpleHashRouter({ routes, beforeEach });
```

URL 示例：`http://localhost:8080/#/about`

### History 路由

需要服务器支持，所有路由都必须返回 `index.html`。

修改 `client/index.html`：
```javascript
<script src="simple-history-router.js"></script>
const router = new SimpleHistoryRouter({ routes, beforeEach });
```

URL 示例：`http://localhost:8080/about`

## 🔄 对比

| 特性 | Hash 路由 | History 路由 |
|------|----------|-------------|
| URL | `#/about` | `/about` |
| 服务器配置 | 不需要 | 需要 |
| SEO | 较差 | 较好 |
| 兼容性 | IE8+ | IE10+ |
| 页面刷新 | 正常 | 需要服务器配置 |

## 🐳 Docker 部署

```bash
# 构建并启动
docker-compose up -d

# 访问
http://localhost:8080

# 停止
docker-compose down
```

## 📁 项目结构

```
router/
├── client/                     # 前端代码
│   ├── index.html
│   ├── simple-hash-router.js
│   └── simple-history-router.js
├── server/                     # 后端代码
│   └── index.js
├── .devcontainer/              # Codespaces 配置
│   └── devcontainer.json
├── package.json
├── nginx.conf                  # Nginx 配置
├── Dockerfile                  # Docker 镜像配置
├── docker-compose.yml          # Docker Compose 配置
└── README.md
```

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎贡献、提问和功能请求！

## ⭐ 支持

如果这个项目对你有帮助，请给一个 ⭐️！
