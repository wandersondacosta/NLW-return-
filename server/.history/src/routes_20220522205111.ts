import express from "express";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const submitFeedbacksUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await submitFeedbacksUseCase.execute({
    comment,
    type,
    screenshot,
  });

  return response.status(201).send();
});
