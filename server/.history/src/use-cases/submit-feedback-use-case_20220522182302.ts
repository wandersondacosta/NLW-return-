import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository;

  constructor(feedbacksRepostory: FeedbacksRepository) {
    this.feedbacksRepository = feedbacksRepostory;
  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { comment, type, screenshot } = request;
  }
}
