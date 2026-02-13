// SimpleHashRouter.js
class SimpleHashRouter {
  constructor(options = {}) {
    this.routes = options.routes || [];
    this.currentRoute = null;
    this.beforeEach = options.beforeEach;

    // 初始化路由
    this.init();
  }

  // 初始化路由
  init() {
    // 监听hash变化
    window.addEventListener('hashchange', this.handleHashChange.bind(this));
    // 页面加载时初始化
    window.addEventListener('load', this.handleHashChange.bind(this));

    // 解析初始路由
    this.handleHashChange();
  }

  // 处理hash变化
  handleHashChange() {
    const path = this.getPath();
    const route = this.matchRoute(path);

    // 处理路由守卫
    if (this.beforeEach) {
      const next = () => {
        this.currentRoute = route;
        this.renderRoute();
        this.updateNav();
      };

      this.beforeEach(route, this.currentRoute, next);
    } else {
      this.currentRoute = route;
      this.renderRoute();
      this.updateNav();
    }
  }

  // 获取当前路径
  getPath() {
    return window.location.hash.slice(1) || '/';
  }

  // 匹配路由
  matchRoute(path) {
    const pathSegments = path.split('/').filter(segment => segment);
    const routeParams = {};

    // 首先尝试匹配普通路由
    for (const route of this.routes) {
      // 跳过404路由
      if (route.path === '*') continue;

      const routeSegments = route.path
        .split('/')
        .filter(segment => segment);

      // 如果路径段数量不匹配，跳过
      if (pathSegments.length !== routeSegments.length) continue;

      // 检查每个路径段是否匹配
      let isMatch = true;
      for (let i = 0; i < routeSegments.length; i++) {
        const routeSegment = routeSegments[i];
        const pathSegment = pathSegments[i];

        // 如果是动态路由参数
        if (routeSegment.startsWith(':')) {
          const paramName = routeSegment.slice(1);
          routeParams[paramName] = pathSegment;
        } else if (routeSegment !== pathSegment) {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        return { ...route, params: routeParams, fullPath: path };
      }
    }

    // 如果没有匹配到普通路由，返回404路由
    const notFoundRoute = this.routes.find(route => route.path === '*');
    if (notFoundRoute) {
      return { ...notFoundRoute, fullPath: path, params: {} };
    }

    // 如果没有配置404路由，返回null
    return null;
  }

  // 渲染路由
  renderRoute() {
    const app = document.getElementById('app');
    if (!this.currentRoute) {
      app.innerHTML = '<h1>404 页面未找到</h1>';
      return;
    }
    app.innerHTML = this.currentRoute.component(this.currentRoute.params || {});
  }

  // 更新导航
  updateNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = '';

    this.routes.forEach(route => {
      if (route.path === '*' || !route.name) return;

      const a = document.createElement('a');
      a.href = `#${route.path}`;
      a.textContent = route.name;

      if (this.currentRoute && (
        route.path === this.currentRoute.path ||
        (route.path.includes(':') &&
          this.currentRoute.fullPath.startsWith(route.path.split(':')[0]))
      )) {
        a.classList.add('active');
      }

      nav.appendChild(a);
    });
  }

  // 导航到指定路由
  push(path) {
    window.location.hash = path;
  }
}