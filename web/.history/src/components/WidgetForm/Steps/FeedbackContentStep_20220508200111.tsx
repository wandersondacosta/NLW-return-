import { FeedBackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackContentStepsProps {
  feedBackType: FeedBackType;
}

export function FeedbackContentStep({
  feedBackType,
}: FeedBackContentStepsProps) {
  const feedBackTypeInfo = feedbackTypes[feedBackType];

  return (
    <>
      <header>
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

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
