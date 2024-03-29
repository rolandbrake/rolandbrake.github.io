const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/about": "/pages/about.html",
};

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  if (window.location.href != event.target.href) {
    window.history.pushState({}, "", event.target.href);
    handleLocation();
  }
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  console.log(html);
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
