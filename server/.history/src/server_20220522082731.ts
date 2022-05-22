import express from "express";
import nodemailer from "nodemailer";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c929c33ffc10d6",
    pass: "6c00fe85149ee2",
  },
});

app.listen(3333, () => {
  console.log("Server running");
});
