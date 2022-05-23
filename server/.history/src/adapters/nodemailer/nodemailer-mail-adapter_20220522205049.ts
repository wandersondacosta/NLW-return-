import { MailAdapter, SendMailData } from "../mail-adapter";

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
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
  }
}
