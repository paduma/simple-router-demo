#!/bin/bash
# 在空白Codespace中快速设置项目

echo "创建项目结构..."
mkdir -p client server

echo "安装依赖..."
npm init -y
npm pkg set scripts.start="node server/index.js"

echo "提示：请上传以下文件到对应目录："
echo "  client/ - index.html, simple-hash-router.js, simple-history-router.js"
echo "  server/ - index.js"
echo ""
echo "然后运行: npm start"
