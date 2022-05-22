import express from "express";
import { prisma } from "./prisma";

const routes = express.Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Wanderson correa <wanderson_c_c@hotmail.com>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário do feedback: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  });

  return response.status(201).send({ data: { feedback } });
});
