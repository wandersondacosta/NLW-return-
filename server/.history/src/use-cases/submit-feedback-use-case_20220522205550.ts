import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepostory: FeedbacksRepository,
    private mailadapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { comment, type, screenshot } = request;

    await this.feedbacksRepostory.create({
      comment,
      type,
      screenshot,
    });

    await this.mailadapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário do feedback: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
