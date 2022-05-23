import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c929c33ffc10d6",
    pass: "6c00fe85149ee2",
  },
});

routes.post("/feedbacks", async (request, response) => {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const submitFeedbacksUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await submitFeedbacksUseCase.execute({
    comment,
    type,
    screenshot,
  });

  // await transport.sendMail({
  //   from: "Equipe Feedget <oi@feedget.com>",
  //   to: "Wanderson correa <wanderson_c_c@hotmail.com>",
  //   subject: "Novo feedback",
  //   html: [
  //     `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
  //     `<p>Tipo do feedback: ${type}</p>`,
  //     `<p>Comentário do feedback: ${comment}</p>`,
  //     `</div>`,
  //   ].join("\n"),
  // });

  return response.status(201).send({ data: { feedback } });
});
