# SimpleRouter 示例

> A simple demo explaining the difference between hash and history routing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

## 📖 简介

手写简单路由库，演示 Hash 路由和 History 路由的差异及后端配置需求。适合学习前端路由原理。

## ✨ 特性

- ✅ 纯原生 JavaScript 实现
- ✅ 支持动态路由参数（如 `/user/:id`）
- ✅ 路由守卫（beforeEach）
- ✅ 404 路由处理
- ✅ 完整的前后端示例
- ✅ Docker 一键部署

## 🚀 快速开始

### 方式1：Node.js 服务器

```bash
npm start
# 访问 http://localhost:3000
```

### 方式2：Docker

```bash
docker-compose up -d
# 访问 http://localhost:8080
```

### 方式3：GitHub Codespaces

1. Fork 本仓库
2. 点击 "Code" → "Codespaces" → "Create codespace"
3. 运行 `npm start`

## 演示 Hash 路由和 History 路由的差异及后端配置。

## GitHub Codespaces 使用

1. 推送代码到GitHub仓库
2. 点击仓库页面的 "Code" → "Codespaces" → "Create codespace"
3. 等待环境启动（自动安装依赖）
4. 运行命令：

```bash
# 方式1：Node.js服务器
npm start
# 访问端口3000

# 方式2：Docker + Nginx
docker-compose up -d
# 访问端口8080
```

Codespaces会自动转发端口，点击弹出的链接即可访问。

## 在线演示平台推荐

### 1. StackBlitz（推荐）
- 支持 Node.js 后端
- 可以运行完整的前后端项目
- URL: https://stackblitz.com
- 支持 Vite、Node.js 等

### 2. CodeSandbox
- 支持容器模式（Container）可运行 Node.js
- 创建时选择 "Node.js" 模板
- URL: https://codesandbox.io

### 3. Replit
- 完整的 Linux 环境
- 支持任意后端语言
- URL: https://replit.com

### 4. Glitch
- 专注于 Node.js 应用
- URL: https://glitch.com

## 本地 Docker 部署

### 快速启动

```bash
# 构建并启动
docker-compose up -d

# 访问
http://localhost:8080

# 停止
docker-compose down
```

### 手动 Docker 命令

```bash
# 构建镜像
docker build -t simple-router .

# 运行容器
docker run -d -p 8080:80 --name router-demo simple-router

# 停止容器
docker stop router-demo
docker rm router-demo
```

## Hash 路由模式

直接用浏览器打开 `index.html` 即可，无需服务器。

修改 `index.html`：
```javascript
<script src="simple-hash-router.js"></script>
const router = new SimpleHashRouter({ routes, beforeEach });
```

URL 示例：`http://localhost:8080/#/about`

## History 路由模式

需要服务器支持，所有路由都返回 `index.html`。

修改 `index.html`：
```javascript
<script src="simple-history-router.js"></script>
const router = new SimpleHistoryRouter({ routes, beforeEach });
```

URL 示例：`http://localhost:8080/about`

### Node.js 服务器（无 Docker）

```bash
node server.js
# 访问 http://localhost:3000
```

## 两种路由的区别

| 特性 | Hash 路由 | History 路由 |
|------|----------|-------------|
| URL | `#/about` | `/about` |
| 服务器配置 | 不需要 | 需要 |
| SEO | 较差 | 较好 |
| 兼容性 | IE8+ | IE10+ |
| 刷新页面 | 正常 | 需要服务器配置 |

## 项目结构

```
router/
├── client/                     # 前端代码
│   ├── index.html
│   ├── simple-hash-router.js
│   └── simple-history-router.js
├── server/                     # 后端代码
│   └── index.js
├── package.json
├── nginx.conf                  # Nginx 配置
├── Dockerfile                  # Docker 镜像配置
├── docker-compose.yml          # Docker Compose 配置
└── README.md
```
