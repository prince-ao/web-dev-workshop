const app = require("express")();
const cors = require("cors");

const PORT = 8080;

app.use(cors());

app.get("/add", (request, response) => {
  const val = Number(request.query.current);
  response.status(200).send(`${val + 1}`);
});

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
