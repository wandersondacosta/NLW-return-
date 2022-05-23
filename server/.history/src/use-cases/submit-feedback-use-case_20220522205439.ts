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
  }
}
