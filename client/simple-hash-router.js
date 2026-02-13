// SimpleHashRouter.js
class SimpleHashRouter {
  constructor(options = {}) {
    this.routes = options.routes || [];
    this.currentRoute = null;
    this.beforeEach = options.beforeEach;

    // 初始化路由
    this.init();
  }

  // Initialize router
  init() {
    // Listen to hash change
    window.addEventListener('hashchange', this.handleHashChange.bind(this));
    // Initialize on page load
    window.addEventListener('load', this.handleHashChange.bind(this));

    // Parse initial route
    this.handleHashChange();
  }

  // Handle hash change
  handleHashChange() {
    const path = this.getPath();
    const route = this.matchRoute(path);

    // Handle route guard
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

  // Get current path
  getPath() {
    return window.location.hash.slice(1) || '/';
  }

  // Match route
  matchRoute(path) {
    const pathSegments = path.split('/').filter(segment => segment);
    const routeParams = {};

    // Try to match normal routes first
    for (const route of this.routes) {
      // Skip 404 route
      if (route.path === '*') continue;

      const routeSegments = route.path
        .split('/')
        .filter(segment => segment);

      // Skip if path segments length doesn't match
      if (pathSegments.length !== routeSegments.length) continue;

      // Check if each path segment matches
      let isMatch = true;
      for (let i = 0; i < routeSegments.length; i++) {
        const routeSegment = routeSegments[i];
        const pathSegment = pathSegments[i];

        // If it's a dynamic route parameter
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

    // If no normal route matched, return 404 route
    const notFoundRoute = this.routes.find(route => route.path === '*');
    if (notFoundRoute) {
      return { ...notFoundRoute, fullPath: path, params: {} };
    }

    // If no 404 route configured, return null
    return null;
  }

  // Render route
  renderRoute() {
    const app = document.getElementById('app');
    if (!this.currentRoute) {
      app.innerHTML = '<h1>404 Page Not Found</h1>';
      return;
    }
    app.innerHTML = this.currentRoute.component(this.currentRoute.params || {});
  }

  // Update navigation
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

  // Navigate to specified route
  push(path) {
    window.location.hash = path;
  }
}