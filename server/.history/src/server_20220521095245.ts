import express from "express";

const app = express();

app.post("/feedbacks", (request, response) => {
  const feedback = request.body;

  console.log(feedback);

  return response.send(feedbacks);
});

app.listen(3333, () => {
  console.log("Server running");
});
