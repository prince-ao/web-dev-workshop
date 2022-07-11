const app = require("express")();

const PORT = 3000;

app.get("/images/animelazerlogo.png", (request, response) => {
  response.sendFile(__dirname + "/images/Logo2.png");
});

app.get("/images/samizdatlogo.png", (request, response) => {
  response.sendFile(__dirname + "/images/samizdat_logo.png");
});

app.get("/index.css", (request, response) => {
  response.sendFile(__dirname + "/css/index.css");
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/html/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/html/about.html");
});

app.get("/projects", (request, response) => {
  response.sendFile(__dirname + "/html/projects.html");
});

app.get("/contact", (request, response) => {
  response.sendFile(__dirname + "/html/contact.html");
});

app.get("/add", (request, response) => {
  const { counter } = request.query;
  response.status(200).send(`${Number(counter) + 1}`);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
