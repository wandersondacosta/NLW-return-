import { ArrowLeft } from "phosphor-react";
import { FeedBackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackContentStepsProps {
  feedBackType: FeedBackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedBackType,
  onFeedbackRestartRequested,
}: FeedBackContentStepsProps) {
  const feedBackTypeInfo = feedbackTypes[feedBackType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center justify-center gap-2">
          <img
            src={feedBackTypeInfo.image.source}
            alt={feedBackTypeInfo.image.alt}
            className="w-6 h-6 "
          />
          {feedBackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none "
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </form>
    </>
  );
}
