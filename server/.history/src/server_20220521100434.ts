import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", (request, response) => {
  const { type, comment, screenshot } = request.body;

  prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return response.status(201).send();
});

app.listen(3333, () => {
  console.log("Server running");
});
