# SimpleRouter Demo

[中文](./README.zh-CN.md) | English

> A simple demo explaining the difference between hash and history routing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![CodeSandbox](https://img.shields.io/badge/CodeSandbox-Demo-blue)](https://codesandbox.io/p/sandbox/mvl33t)

## 📖 Introduction

A hand-written simple router library demonstrating the differences between Hash routing and History routing, along with backend configuration requirements. Perfect for learning frontend routing principles.

## 🛠️ Tech Stack

### Frontend
- **Vanilla JavaScript** - Pure JS, no framework dependencies
- **HTML5 History API** - History routing implementation
- **CSS3** - Styling and animations

### Backend
- **Node.js** - JavaScript runtime
- **HTTP Module** - Native HTTP server
- **Express** - (Optional) Web framework

### Deployment
- **Docker** - Containerized deployment
- **Nginx** - Production web server
- **Vercel/Netlify** - Serverless deployment platforms

## ✨ Features

- ✅ Pure vanilla JavaScript implementation
- ✅ Support for dynamic route parameters (e.g., `/user/:id`)
- ✅ Route guards (beforeEach)
- ✅ 404 route handling
- ✅ Complete frontend and backend examples
- ✅ One-click Docker deployment

## 🚀 Quick Start

### Method 1: Online Demo

**Live Demo:** [Coming soon - Deploy to Vercel]

Try the frontend-only version: [CodeSandbox](https://codesandbox.io/p/sandbox/mvl33t)

### Method 2: GitHub Codespaces

1. Fork this repository
2. Click "Code" → "Codespaces" → "Create codespace"
3. Run `npm start`
4. Make port 3000 public (PORTS tab → right-click → "Port Visibility" → "Public")
5. Share the public URL

**Perfect for History routing demo** - supports page refresh without 404 errors!

### Method 3: Local Node.js Server

```bash
npm start
# Visit http://localhost:3000
```

### Method 4: Docker

```bash
docker-compose up -d
# Visit http://localhost:8080
```

## 🌐 Deploy Your Own

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/simple-router-demo)

1. Click the button above
2. Connect your GitHub account
3. Deploy!

Vercel will automatically:
- Serve static files from `client/`
- Configure History routing (via `vercel.json`)
- Provide a permanent public URL

## 📚 Hash vs History Routing

### Hash Routing

No server configuration needed. Can be opened directly in browser.

Modify `client/index.html`:
```javascript
<script src="simple-hash-router.js"></script>
const router = new SimpleHashRouter({ routes, beforeEach });
```

URL example: `http://localhost:8080/#/about`

### History Routing

Requires server support. All routes must return `index.html`.

Modify `client/index.html`:
```javascript
<script src="simple-history-router.js"></script>
const router = new SimpleHistoryRouter({ routes, beforeEach });
```

URL example: `http://localhost:8080/about`

## 🔄 Comparison

| Feature | Hash Routing | History Routing |
|---------|--------------|-----------------|
| URL | `#/about` | `/about` |
| Server Config | Not required | Required |
| SEO | Poor | Better |
| Compatibility | IE8+ | IE10+ |
| Page Refresh | Works | Needs server config |

## 🐳 Docker Deployment

```bash
# Build and start
docker-compose up -d

# Visit
http://localhost:8080

# Stop
docker-compose down
```

## 📁 Project Structure

```
router/
├── client/                     # Frontend code
│   ├── index.html
│   ├── simple-hash-router.js
│   └── simple-history-router.js
├── server/                     # Backend code
│   └── index.js
├── .devcontainer/              # Codespaces config
│   └── devcontainer.json
├── package.json
├── nginx.conf                  # Nginx configuration
├── Dockerfile                  # Docker image config
├── docker-compose.yml          # Docker Compose config
└── README.md
```

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!
