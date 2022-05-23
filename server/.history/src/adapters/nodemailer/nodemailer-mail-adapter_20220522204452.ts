import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c929c33ffc10d6",
    pass: "6c00fe85149ee2",
  },
});


export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail: (data: SendMailData) {
     transport.sendMail({
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
  };
}