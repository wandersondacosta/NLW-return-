import express from "express";

const app = express();

app.use(express.json());

app.post("/feedbacks", (request, response) => {
  const feedback = request.body;

  console.log(feedback);

  return response.status(201).send(feedback);
});

app.listen(3333, () => {
  console.log("Server running");
});
