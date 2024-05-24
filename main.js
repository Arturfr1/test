// Determine if the code is running on localhost
var isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

// Function to get the correct path to navbar.html
function getNavbarPath() {
  // Get the current page's URL
  var url = window.location.pathname;

  // Split the URL into segments
  var segments = url.split("/");

  // Check if the last segment is index.html (or if the URL ends with /code/)
  if (
    segments[segments.length - 1] === "index.html" ||
    segments[segments.length - 1] === "code"
  ) {
    // If it is, navbar.html is in the same directory
    return isLocalhost ? "navbar.html" : "/test/navbar.html";
  } else {
    // If it's not, navbar.html is in the parent directory
    return isLocalhost ? "navbar.html" : "/test/navbar.html";
  }
}

// Function to set the href attribute of a navbar link
function setNavbarLinkHref(linkId, href, callback) {
  // Get the link element
  var link = document.getElementById(linkId);

  // Check if the link element exists
  if (link) {
    // Set the href attribute
    link.href = href;

    // Call the callback function if it exists
    if (callback) {
      callback();
    }
  } else {
    console.error("Link with id " + linkId + " does not exist");
  }
}

// Fetch navbar.html
fetch(getNavbarPath())
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // Get the current page's URL
    var url = window.location.pathname;

    // Split the URL into segments
    var segments = url.split("/");

    // Check if the last segment is index.html (or if the URL ends with /code/)
    if (
      segments[segments.length - 1] === "index.html" ||
      segments[segments.length - 1] === "code"
    ) {
      // If it is, set the hrefs for the navbar links
      setNavbarLinkHref(
        "homeLink",
        isLocalhost ? "index.html" : "/test/index.html"
      );
      setNavbarLinkHref(
        "projectsLink",
        isLocalhost ? "projects.html" : "/test/projects.html"
      );
      setNavbarLinkHref(
        "contactLink",
        isLocalhost ? "contact.html" : "/test/contact.html"
      );
    } else {
      // If it's not, set the hrefs for the navbar links
      setNavbarLinkHref(
        "homeLink",
        isLocalhost ? "index.html" : "/test/index.html"
      );
      setNavbarLinkHref(
        "projectsLink",
        isLocalhost ? "projects.html" : "/test/projects.html"
      );
      setNavbarLinkHref(
        "contactLink",
        isLocalhost ? "contact.html" : "/test/contact.html"
      );
    }

    // Get all navbar links
    var navbarLinks = document.querySelectorAll(".navbar a");

    // Loop through the navbar links
    for (var i = 0; i < navbarLinks.length; i++) {
      // Create a new URL object from the href of the navbar link
      var navbarLinkUrl = new URL(navbarLinks[i].href);

      // If the pathname of the navbar link URL matches the current page, add the "active" class to it
      if (navbarLinkUrl.pathname === url) {
        navbarLinks[i].classList.add("active");
      }
    }
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
