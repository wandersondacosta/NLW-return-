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
        <span className="text-xl leading-6">
          <img
            src={feedBackTypeInfo.image.source}
            alt={feedBackTypeInfo.image.alt}
          />
          {feedBackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
