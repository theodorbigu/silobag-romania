document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches(".link")) {
    return;
  }
  e.preventDefault();
  console.log("nav sau a");
  route(e);
});

const routes = {
  "/": {
    template: "/index.html",
    title: "Home",
  },
  "/silobags": {
    template: "/html/silobags.html",
    title: "Silobags",
  },
  "/utilaje": {
    template: "/html/utilaje.html",
    title: "Utilaje",
  },
  "/G65": {
    template: "/G-65.html",
    title: "RSA",
  },
  "/RSA": {
    template: "/html/RSA.html",
    title: "RSA",
  },
  "/contact": {
    template: "/html/contact.html",
    title: "Contact",
  },
};

const route = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  console.log(event.target.href);
  // window.history.pushState(state, unused, target link);
  window.history.pushState({}, "", event.target.href);
  locationHandler();
};

const locationHandler = async () => {
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  console.log("location:" + location);
  if (location.length == 0) {
    location = "/";
  }
  // get the route object from the urlRoutes object
  const route = routes[location];
  console.log("route:" + JSON.stringify(route));
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());

  //console.log(html);
  // set the content of the content div to the html
  document.getElementById("body").innerHTML = html;
  // set the title of the document to the title of the route
  document.title = route.title;
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();
