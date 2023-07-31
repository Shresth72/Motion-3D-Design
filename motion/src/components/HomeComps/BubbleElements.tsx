import { FC } from "react";

interface BubbleProps {
  left: boolean;
  up: boolean;
  incrementLeft: number;
  incrementUp: number;
  className: string;
}

const Bubble: FC<BubbleProps> = ({
  className,
  left,
  up,
  incrementLeft,
  incrementUp,
}) => {
  return (
    <div
      className={`bubble ${className}`}
      style={{
        transform: `${left === true ? `translateX(-${incrementLeft}vw)` : ""}`,
        translate: `${up === true ? `0 -${incrementUp}vw` : ""}`,
      }}
    >
      {className === "black" && (
        <svg
          className="diamond"
          width="490"
          height="491"
          viewBox="0 0 490 491"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M322.953 167.031C284.438 128.502 258.075 61.2188 244.992 0C231.889 61.2313 205.555 128.528 167.025 167.058C128.509 205.561 61.2063 231.923 0 245.033C61.2313 258.116 128.522 284.462 167.038 322.994C205.553 361.509 231.916 428.806 245.019 490.025C258.102 428.794 284.456 361.497 322.966 322.967C361.481 284.452 428.784 258.102 489.991 244.992C428.773 231.909 361.483 205.548 322.953 167.031Z"
            fill="#f4f4f8"
          />
        </svg>
      )}
    </div>
  );
};

export default Bubble;
