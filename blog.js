type =
  "text/javascript" >
  // Select the div element with 'app' id const app =
  document.getElementById("app");

const header = document.createElement("h1");

const headerContent = document.createTextNode("Welcome to my Cake Blog");
header.appendChild(headerContent);
app.appendChild(header);
